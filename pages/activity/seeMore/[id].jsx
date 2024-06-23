import React from "react";
import styles from "styles/seeMore.module.css";
import globals from "styles/globals.module.css";
import { useEffect, useState } from "react";
import { activityService } from "services";
import { useRouter } from "next/router";

function SeeMore() {
  const router = useRouter();
  const [activity,setActivity] = useState();
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      activityService.getById(id).then(x => setActivity(x));
    }
  }, [router.query]);

  if (!activity) return <p>Loading...</p>;


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
            <div>
              <p className={globals.infoTitle}>Ubicación</p>
              <div className={styles.ubication}></div>

              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p className={globals.infoTitle}>Imagenes Representativa</p>
            <div className={styles.image}>
              <img src="" alt="Imagen representativa" />
            </div>
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
            <p>Facebook----------------------------{activity.facebook}</p>
            <p>Instagram---------------------------{activity.instagram}</p>
            <p>Telefono----------------------------{activity.phone}</p>
          </div>
          <div>
            <div className={globals.containerFlex}>
              <button
                type="buttom"
                className={globals.btnSave + " " + globals.customBtn}
              >
                {" "}
                <span>Inscribirse</span>
              </button>

              <button className={globals.btnCancel + " " + globals.customBtn}>
                {" "}
                <span> Cancelar </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
