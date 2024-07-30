import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';


const Person = db.Person;

export const personsRepo = {

    getAll,
    getById,
    getByActivityId,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Person.find();
}

async function getById(id) {
    return await Person.findById(id);
}
async function getByActivityId(idActivity) {
    return await Person.find({ idActivity: idActivity });
}
async function create(params) {
    const person = new Person(params);

    // save car
    await person.save();
}

async function update(id, params) {
    const person = await Person.findById(id);

    // validate
    if (!person) throw 'User not found';
    if (person.idPerson !== params.idPerson && await Person.findOne({ idPerson: params.idPerson })) {
        throw 'Plata "' + params.idPerson + '" is already taken';
    }

    // copy params properties to car
    Object.assign(person, params);

    
    await person.save();
}

async function _delete(id) {
    await Person.findByIdAndRemove(id);
}