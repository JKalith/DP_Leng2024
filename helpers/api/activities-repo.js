import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Activities = db.Activity;

export const activityRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    // Verificar si Activities está definido antes de usarlo
    if (!Activities) {
        throw new Error('Error: Activities model is not available.');
    }

    return await Activities.find();
}

async function getById(id) {
    // Verificar si Activities está definido antes de usarlo
    if (!Activities) {
        throw new Error('Error: Activities model is not available.');
    }

    return await Activities.findById(id);
}

async function create(params) {
    // Verificar si Activities está definido antes de usarlo
    if (!Activities) {
        throw new Error('Error: Activities model is not available.');
    }

    const activities = new Activities(params);

    // Guardar actividad
    await activities.save();
}

async function update(id, params) {
    // Verificar si Activities está definido antes de usarlo
    if (!Activities) {
        throw new Error('Error: Activities model is not available.');
    }

    const activities = await Activities.findById(id);

    // Validar
    if (!activities) throw new Error('User not found');
    if (activities.idActivity !== params.idActivity && await Activities.findOne({ idActivity: params.idActivity })) {
        throw new Error('Plata "' + params.idActivity + '" is already taken');
    }

    // Copiar propiedades de params a la actividad
    Object.assign(activities, params);

    await activities.save();
}

async function _delete(id) {
    // Verificar si Activities está definido antes de usarlo
    if (!Activities) {
        throw new Error('Error: Activities model is not available.');
    }

    await Activities.findByIdAndRemove(id);
}
