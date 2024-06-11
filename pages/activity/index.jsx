import React, { useEffect,useState } from "react";
import { activityService } from "services";
import ACard from "components/activity/Card";
import styles from "styles/activity.module.css"



 const activityPage=()=> {


const [activities,setActivities]= useState([]);
useEffect(() => {
    activityService.getAll().then(data => {  setActivities(data)}).catch(error=> {console.error("Error",error)});
}, []);
return(

<div>
<div className= {styles.containerFilter}>



</div>
<div className = {styles.container}>



{activities.map(activity =>(<div key={activity.id}> <ACard activity={activity}/> </div>
) ) }



</div>

</div>



);
 }

export default activityPage;

