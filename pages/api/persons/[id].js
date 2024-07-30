import { apiHandler,personsRepo } from 'helpers/api';

export default apiHandler({
    get: (req, res) => {
        if (req.query.idActivity) {
            return getByActivityId(req, res);
        }
        return getById(req, res);
    },
    put: update,
    delete: _delete
});

async function getById(req, res) {
    const person = await personsRepo.getById(req.query.id);

    if (!person) throw 'Car Not Found';

    return res.status(200).json(person);
}

async function update(req, res) {
    await personsRepo.update(req.query.id, req.body);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await personsRepo.delete(req.query.id);
    return res.status(200).json({});
}
async function getByActivityId(req, res) {
    const { idActivity } = req.query;

    if (!idActivity) {
        return res.status(400).json({ message: 'idActivity is required' });
    }

    try {
        const persons = await personsRepo.getByActivityId(idActivity);
        console.log("Persons found:", persons); // Log para depuración
        return res.status(200).json(persons);
    } catch (error) {
        console.error('Error fetching persons by activity ID:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
