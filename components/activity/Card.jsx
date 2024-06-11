
import React from "react";


const ActivityCard = ({ activity }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{activity.nameActivity}</h5>
               
                    
              
              


                <p className="card-text">{activity.activityDescription}</p>
                <a href={`/activities/${activity.id}`} className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );

};


export default ActivityCard;