import styles from "styles/activityCard.module.css"
import React from "react";


const ActivityCard = ({ activity }) => {
    return (
        <div className={styles.container}>
<div className={styles .divider}>

<div className={styles.Photo}>



</div>

<div className="card-body">
                <h5 className="card-title">{activity.nameActivity}</h5>
                <h5 className="card-title">{activity.activityDescription}</h5>
                <h5 className="card-title">{activity.place}</h5>
                <h5 className="card-title">{activity.email}</h5>
       
                <h5 className="card-title">{activity.startTime}</h5>
                <h5 className="card-title">{activity.place}</h5>
                <p className="card-text">{activity.endTime}</p>
                <a href={`/activities/${activity.id}`} className="btn btn-primary">Ver más</a>
            </div>
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



