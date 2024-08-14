import { apiHandler, activityRepo } from 'helpers/api';

export default apiHandler({
    get: (req, res) => {
        if (req.query.userId) {
            return getByUserId(req, res);
        }
        return getById(req, res);
    },
    put: update,
    delete: _delete
});

async function getByUserId(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: 'IDUSER is required' });
    }

    try {
        const activity = await activityRepo.getByUserId(userId);
        console.log("activity found:", activity); // Log para depuración
        return res.status(200).json(activity);
    } catch (error) {
        console.error('Error fetching usuario:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getById(req, res) {
    const activities = await activityRepo.getById(req.query.id);

    if (!activities) throw 'actividad Not Found';

    return res.status(200).json(activities);
}

async function update(req, res) {
    await activityRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await activityRepo.delete(req.query.id);
    return res.status(200).json({});
}
