 import { apiHandler, activityRepo } from 'helpers/api';

export default apiHandler({
    get: getAll,
    post: register
});

async function getAll(req, res) {
    const activities = await activityRepo.getAll();
    return res.status(200).json(activities);
}
async function register(req, res) {
    await activityRepo.create(req.body);
    return res.status(200).json({});
}
