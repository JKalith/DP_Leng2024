import React, { useEffect, useState } from "react";
import { activityService } from "services";
import ACard from "components/activity/Card";
import styles from "styles/activity.module.css";

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dateFilter, setDateFilter] = useState(""); 
  const [dateCondition, setDateCondition] = useState(""); 

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
    const filterActivities = () => {
      let filtered = activities;

      if (selectedCategories.length > 0) {
        filtered = filtered.filter(activity =>
          activity.activityCategory.some(category =>
            category.toLowerCase() === selectedCategories.toLowerCase()
          )
        );
      }

      if (dateFilter && dateCondition) {
        const selectedDate = new Date(dateFilter);

        filtered = filtered.filter(activity => {
          const activityStartDate = new Date(activity.startDate);

          if (dateCondition === "before") {
            return activityStartDate < selectedDate;
          } else if (dateCondition === "after") {
            return activityStartDate > selectedDate;
          } else if (dateCondition === "on") {
            return activityStartDate.toDateString() === selectedDate.toDateString();
          }

          return true;
        });
      }

      setFilteredActivities(filtered);
    };

    filterActivities();
  }, [selectedCategories, dateFilter, dateCondition, activities]);

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const handleDateConditionChange = (event) => {
    setDateCondition(event.target.value);
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

        <select onChange={handleDateConditionChange} value={dateCondition}>
          <option value="">Todas las fechas</option>
          <option value="before">Antes de</option>
          <option value="after">Después de</option>
          <option value="on">En la fecha</option>
        </select>
        <input type="date" onChange={handleDateFilterChange} value={dateFilter} />
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