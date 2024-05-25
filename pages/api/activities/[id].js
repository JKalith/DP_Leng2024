import { apiHandler, activityRepo } from 'helpers/api';

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    const activities = await activityRepo.getById(req.query.id);

    if (!activities) throw 'Car Not Found';

    return res.status(200).json(car);
}

async function update(req, res) {
    await activityRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await activityRepo.delete(req.query.id);
    return res.status(200).json({});
}
