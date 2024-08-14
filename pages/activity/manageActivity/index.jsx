import { useState, useEffect } from "react";
import { activityService, userService } from "services";
import Link from "next/link";
import styles from "styles/manageActivity.module.css";
import globals from "styles/globals.module.css";
function ManageActivity() {
  const [activities, setActivities] = useState([]);

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    
    const subscription = userService.user.subscribe(user => {
      if (user) {
        setUserId(user.id);
      } else {
        setUserId(null);
      }
    });
    
    
    if (userId) {
      activityService.getByUserId(userId).then((data) => {
        if (Array.isArray(data)) {
          setActivities(data);
        } else {
          console.error("Invalid data format", data);
        }
      }).catch(error => {
        console.error("Failed to fetch activities:", error);
      });
    }

  
    return () => subscription.unsubscribe();
  }, [userId]);
  function deleteActivity(id) {
    activityService
      .delete(id)
      .then(() => {
        setActivities((prevActivities) =>
          prevActivities.filter((x) => x.id !== id)
        );
      })
      .catch((error) => {
        console.error("Failed to delete activity:", error);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerSec}>
        <h1 className={styles.infoTitle}>Actividades</h1>

        <table className={styles.tableActivity}>
          <thead className={styles.thead}>
            <tr>
              <th>Nombre de la actividad</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Finalizacion</th>
              <th>Edicion</th>
            </tr>
          </thead>
          <tbody>
            {activities.length > 0 &&
              activities.map((activity) => (
                <tr key={activity.id} className={styles.nameRow}>
                  <td className={styles.nameRow}>{activity.nameActivity}</td>

                  <td className={styles.startDateRow}>{activity.startDate}</td>
                  <td className={styles.endDateRow}>{activity.endDate}</td>
                  <td className={styles.editionRow}>
                    <div className={styles.containerFlex}>
                      <Link
                        className={styles.Links}
                        href={`/activity/edit/${activity.id}`}
                      >
                        <button className={styles.buttonEdit}>
                          <span className={styles.text}>Editar</span>
                          <span className={styles.icon}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="44"
                              height="44"
                              viewBox="3 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-pencil-plus"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                              <path d="M13.5 6.5l4 4" />
                              <path d="M16 19h6" />
                              <path d="M19 16v6" />
                            </svg>
                          </span>
                        </button>
                      </Link>

                      <button
                        className={styles.buttonDelete}
                        onClick={() => deleteActivity(activity.id)}
                      >
                        <span className={styles.text}>Delete</span>
                        <span className={styles.icon}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageActivity;
