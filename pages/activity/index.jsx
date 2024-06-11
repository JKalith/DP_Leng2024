import React, { useEffect,useState } from "react";
import { activityService } from "services";
import ACard from "components/activity/Card";




 const activityPage=()=> {


const [activities,setActivities]= useState([]);
useEffect(() => {
    activityService.getAll().then(data => {  setActivities(data)}).catch(error=> {console.error("Error",error)});
}, []);
return(
<div>
{activities.map(activity =>(<div key={activity.id}> <ACard activity={activity}/> </div>
) ) }





</div>



);
 }

export default activityPage;

