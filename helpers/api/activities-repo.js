import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Activities = db.Activities;

export const activityRepo = {

    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Activities.find();
}

async function getById(id) {
    return await Activities.findById(id);
}

async function create(params) {
    const activities = new Activities(params);

    // save car
    await activities.save();
}

async function update(id, params) {
    const activities = await Activities.findById(id);

    // validate
    if (!activities) throw 'User not found';
    if (activities.idActivity !== params.idActivity && await Activities.findOne({ idActivity: params.idActivity })) {
        throw 'Plata "' + params.idActivity + '" is already taken';
    }

    // copy params properties to car
    Object.assign(activities, params);

    
    await activities.save();
}

async function _delete(id) {
    await Activities.findByIdAndRemove(id);
}
