import { useState, useEffect } from "react";
import { activityService } from "services";
import Link from "next/link";

function ManageActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    activityService.getAll().then((data) => {
      if (Array.isArray(data)) {
        setActivities(data);
      } else {
        console.error("Invalid data format", data);
      }
    });
  }, []);

  function deleteActivity(id) {
    activityService.delete(id).then(() => {
      setActivities((prevActivities) => prevActivities.filter((x) => x.id !== id));
    }).catch(error => {
      console.error("Failed to delete activity:", error);
    });
  }

  return (
    <div>
      <h1>Actividades</h1>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>Fecha 1</th>
            <th>Fecha 2</th>
            <th>boton 1</th>
          </tr>
        </thead>
        <tbody>
          {activities.length > 0 &&
            activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.nameActivity}</td>
                <td>{activity.startDate}</td>
                <td>{activity.endDate}</td>
                <td>
                <Link href={`/activity/edit/${activity.id}`} >Edit</Link>
                  <button onClick={() => deleteActivity(activity.id)}>
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageActivity;
