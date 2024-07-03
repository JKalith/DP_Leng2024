import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import styles from "styles/seeMore.module.css";
import globals from "styles/globals.module.css";
import { activityService } from "services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ imageUrl }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true, // Asegura que el contenedor del carrusel se adapte a la altura de la imagen
  };

  return (
    <Slider {...settings}>
      {imageUrl.map((url, index) => (
        <div key={index} className={styles.containerImage}>
          <img
            src={url}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </Slider>
  );
};

function SeeMore() {
  const router = useRouter();
  const [activity, setActivity] = useState();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      activityService.getById(id).then((x) => setActivity(x));
    }
  }, [router.query]);

  if (!activity) return <p>Loading...</p>;
  const handleInscribirse = () => {
    router.push(`/persons/addPerson/${activity.id}`);
  };
  const googleMapsUrl = `https://maps.google.com/maps?q=${activity.latitude},${activity.longitude}&z=15&output=embed`;
  const googleMapsLink = `https://www.google.com/maps?q=${activity.latitude},${activity.longitude}`;

  return (
    <div className={styles.containerCenter}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={globals.infoTitle}>{activity.nameActivity}</h1>
          <section className={styles.dividerText}>
            <p className={globals.fontBold}>Lugar: </p>
            <p>{activity.place}</p>
          </section>
          <section className={styles.dividerText}>
            <p className={globals.fontBold}>Fecha de inicio:</p>
            <p> {activity.startDate}</p>
          </section>
          <section className={styles.dividerText}>
            <p className={globals.fontBold}>Fecha de finalización: </p>
            <p>{activity.endDate}</p>
          </section>
          <div>
            <section className={styles.dividerText}>
              <p className={globals.fontBold}>Hora de inicio:</p>
              <p>{activity.startTime}</p>
            </section>
            <section className={styles.dividerText}>
              <p className={globals.fontBold}>Hora de finalización: </p>
              <p>{activity.endTime}</p>
            </section>
          </div>
          <div>
            <p className={globals.fontBold + " " + globals.size}>
              Descripcion del evento
            </p>
            <div className={styles.textDescription}>
              <p className={styles.pDescription}>
                {activity.activityDescription}
              </p>
            </div>
            <p className={globals.infoTitle}>Ubicación</p>
            <div className={styles.containerMap}>
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p className={globals.infoTitle}>Imagenes Representativa</p>

            {activity.imageUrl && (
              <ImageCarousel imageUrl={activity.imageUrl} />
            )}
          </div>

          <p className={globals.infoTitle}>Categoria</p>
          <div>
            {activity.activityCategory.map((category, index) => (
              <button key={index} className={styles.category} disabled>
                {category}
              </button>
            ))}
          </div>
          <div className={styles.contact}>
            <p>Contactenos</p>
            <p>Facebook: {activity.facebook}</p>
            <p>Instagram: {activity.instagram}</p>
            <p>Telefono: {activity.phone}</p>
          </div>
          <div>
           
              <button
                type="button"
                className={globals.btnSave + " " + globals.customBtn}
                onClick={handleInscribirse}
              >
                <span>Inscribirse</span>
              </button>
           
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
