import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import styles from "styles/seeMore.module.css";
import globals from "styles/globals.module.css";
import { activityService,personService } from "services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from "react-hook-form";
const getCategoryStyle = (category) => {
  const categoryLower = category.toLowerCase();
  const colorMap = {
      'entretenimiento': { backgroundColor: ' rgb(96, 96, 255)' },
      'aire libre': { backgroundColor: ' rgb(255, 190, 92)' },
      'cine':{backgroundColor: ' rgb(101, 255, 101)'},
      'deporte':{backgroundColor: '#ff4949'},
      'danza':{backgroundColor: 'rgb(244, 255, 97)'},
      'acampar':{backgroundColor: 'rgb(255, 114, 224)'}
  };

  // Verificar si la categoría existe en el mapa, si no, usar gris como color por defecto
  return colorMap[categoryLower] || { backgroundColor: 'grey' };
};
const ImageCarousel = ({ imageUrl }) => {
  const defaultImg = "https://firebasestorage.googleapis.com/v0/b/activity-image-firebase.appspot.com/o/DefaultImage.jpg?alt=media&token=324b0531-d6cc-4b26-b75f-245d9eee4cd5";
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
    <div>
    {imageUrl.length === 0 ? (
      <div className={styles.containerImage}>
        <img
          src={defaultImg}
          alt="default Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ) : (
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
    )}
  </div>
);
};

function SeeMore() {
  const router = useRouter();
  const [activity, setActivity] = useState();
  const [person, setPersons] = useState([]);
  const [personCount, setPersonCount] = useState(0);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      activityService.getById(id).then((x) => setActivity(x));
      personService.getByActivityId(id).then((persons) => {
        console.log("Persons fetched:", persons); // Log para depuración
        setPersons(persons);
        setPersonCount(persons.length);
    }).catch((error) => {
        console.error("Error fetching persons:", error);
    });
    }
   
    
  }, [router.query]);
 
  if (!activity) return <p>Loading...</p>;
  const handleInscribirse = () => {
    router.push(`/persons/addPerson/${activity.id}`);
  };
  
  
  const googleMapsUrl = `https://maps.google.com/maps?q=${activity.latitude},${activity.longitude}&z=15&output=embed`;
  const googleMapsLink = `https://www.google.com/maps?q=${activity.latitude},${activity.longitude}`;
  const isInscribirseHidden = activity.allowRegistration ||  personCount >= activity.maxPersonRegistration;
  console.log(isInscribirseHidden)
  return (
    <div className={styles.containerCenter}>
     
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={globals.infoTitle}>{activity.nameActivity}</h1>
<p>{activity.userId}</p>
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
      
          <div className={styles.divCategory}>
            {activity.activityCategory.map((category, index) => (
                <button 
                    key={index} 
                    className={styles.category} 
                    style={getCategoryStyle(category)} 
                    disabled
                >
                    {category}
                </button>
            ))} </div>
          <div className={styles.contact}>
            <p>Contactenos</p>
            <p>Facebook: {activity.facebook}</p>
            <p>Instagram: {activity.instagram}</p>
            <p>Telefono: {activity.phone}</p>
          </div>
          <div  hidden={isInscribirseHidden}>
         
              <button
             
                type="button"
                className={globals.btnSave + " " + globals.customBtn}
                onClick={handleInscribirse}
              >
                <span>Inscribirse</span>
              </button>
           
              <div>
            <p className={globals.infoTitle}>Personas Inscritas: {personCount}</p>
           
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
