import React, { useEffect, useState } from "react";
import { activityService } from "services";
import ACard from "components/activity/Card";
import styles from "styles/activity.module.css";

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    
    activityService.getAll()
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data); 
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, []);

  useEffect(() => {
    //parte para filtrar
    const filterActivities = () => {
      if (selectedCategories.length === 0) {
        
        setFilteredActivities(activities);
      } else {
        
        const filtered = activities.filter(activity =>
          activity.activityCategory.some(category =>
            category.toLowerCase() === selectedCategories.toLowerCase()
          )
        );
        setFilteredActivities(filtered);
      }
    };

    filterActivities(); 
  }, [selectedCategories, activities]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories(value); 
  };

  return (
    <div>
      <div className={styles.containerFilter}>
        <select onChange={handleCategoryChange} value={selectedCategories}>
          <option value="">Todas las categorías</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="aire libre">Aire Libre</option>
          <option value="cine">Cine</option>
          <option value="deporte">Deporte</option>
          <option value="danza">Danza</option>
          <option value="acampar">Acampar</option>
        </select>
      </div>

      <div className={styles.containerCenter}>
        <div className={styles.container}>
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <div key={activity.id}>
                <ACard activity={activity} />
              </div>
            ))
          ) : (
            <p>No se encontraron actividades con la categoría seleccionada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;