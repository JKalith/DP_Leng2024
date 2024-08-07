import { activityService } from "services";
import AddEditActivity from 'components/activity/AddEditActivity';
import { Spinner } from 'components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { alertService } from "services";
export default Edit;

function Edit() {
  const router = useRouter();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (!id) return;

    // fetch user and set default form values if in edit mode
    activityService
      .getById(id)
      .then((x) => setActivity(x))
      .catch(alertService.error);
  }, [router]);

  return <div>{activity ? <AddEditActivity activity={activity} /> : <Spinner />}</div>;
}
