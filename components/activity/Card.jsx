import styles from "styles/activityCard.module.css";
import React from "react";
import { useRouter } from "next/router";
const ActivityCard = ({ activity }) => {
  const router = useRouter();
  const mainImageUrl = activity.imageUrl[activity.indiceImagenPrincipal] || "";
  const handleCardClick = () => {
    router.push(`/activity/seeMore/${activity.id}`);
  };
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
  return (
    <div className={styles.container} onClick={handleCardClick}>
      <label className={styles.Photo}>
        {mainImageUrl && (
          <img
            src={mainImageUrl}
            alt={activity.nameActivity}
            className={styles.mainImage}
          />
        )}
      </label>

      <div className={styles.infoContainer}>
        <div className={styles.containerTitle}>
          <h5 className={styles.h5 + " " + styles.title}>
            {activity.nameActivity}
          </h5>
        </div>

  

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

<section className={styles.dividerText}>
          <p className={styles.p + " " + styles.title}> Lugar: </p>
          <p className={styles.p}> {activity.place}</p>
          </section>
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
