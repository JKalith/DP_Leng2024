import { apiHandler,personRepo } from 'helpers/api';

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    const person = await personRepo.getById(req.query.id);

    if (!person) throw 'Car Not Found';

    return res.status(200).json(person);
}

async function update(req, res) {
    await personRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await personRepo.delete(req.query.id);
    return res.status(200).json({});
}
