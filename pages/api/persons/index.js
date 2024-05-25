 import { apiHandler, personsRepo } from 'helpers/api';

export default apiHandler({
    get: getAll,
    post: register
});

async function getAll(req, res) {
    const persons = await personsRepo.getAll();
    return res.status(200).json(persons);
}
async function register(req, res) {
    await personsRepo.create(req.body);
    return res.status(200).json({});
}
