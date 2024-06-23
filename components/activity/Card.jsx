import styles from "styles/activityCard.module.css";
import React from "react";
import { useRouter } from "next/router";
const ActivityCard = ({ activity }) => {
    const router = useRouter();

    const handleCardClick = () => {
      router.push(`/activity/seeMore/${activity.id}`);
    };
  return (
    <div
      className={styles.container}
      onClick={handleCardClick}
    >
      <label className={styles.Photo}></label>

      <div className={styles.infoContainer}>
        <div className={styles.containerTitle}>
          <h5 className={styles.h5 + " " + styles.title}>
            {activity.nameActivity}
          </h5>
        </div>

        <div className={styles.category}></div>

        <div className={styles.dividerText}>
          <p className={styles.p + " " + styles.title}> Lugar: </p>
          <p className={styles.p}> {activity.place}</p>
        </div>
        <section className={styles.dividerText}>
          <p className={styles.p + " " + styles.title}> Fecha de Inicio: </p>
          <p className={styles.p}> {activity.startDate}</p>
        </section>
        <section className={styles.dividerText}>
          <p className={styles.p + " " + styles.title}> Hora de inicio: </p>
          <p className={styles.p}> {activity.startTime}</p>
        </section>

        <section className={styles.dividerText}>
          <p className={styles.p + " " + styles.title}>
            {" "}
            Fecha de Finalizacion:{" "}
          </p>
          <p className={styles.p}> {activity.endDate}</p>
        </section>
      </div>
    </div>
  );
};

export default ActivityCard;

// nameActivity: { type: String, required: true },
// place: { type: String, required: true },
// email: { type: String, required: true },
// instagram: { type: String, required: true },
// facebook: { type: String, required: true },
// phone: { type: String, required: true },
// startDate: { type: String, required: true },
// endDate: { type: String, required: true },
// startTime: { type: String, required: true },
// endTime: { type: String, required: true },
// activityDescription: { type: String, required: true },
// activityCategory: [{ type: String, required: true }],
// allowRegistration: { type: Boolean, default: false },
// maxPersonRegistration: { type: Number, default: 0 },
// latitude: { type: String },
// length: { type: String },
// imageUrl: [{ type: String }],
// indiceImagenPrincipal: { type: Number },
