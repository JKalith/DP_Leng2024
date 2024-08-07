import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchActivity } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/activities`;
const activitySubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('activity')));

export const activityService = {
    activity: activitySubject.asObservable(),
    get activityValue() { return activitySubject.value },
    register,
    getAll,
    getById,
    update,
    delete: _delete
};



async function register(activity) {
    await fetchActivity.post(`${baseUrl}/`, activity);
}

async function getAll() {
    return await fetchActivity.get(baseUrl);
}

async function getById(id) {
    return await fetchActivity.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    await fetchActivity.put(`${baseUrl}/${id}`, params);

    // update stored user if the logged in user updated their own record
    // if (id === activitySubject.value.id) {
    //     // update local storage
    //     const activity = { ...activitySubject.value, ...params };
    //     localStorage.setItem('activity', JSON.stringify(activity));

    //     // publish updated user to subscribers
    //     activitySubject.next(activity);
    // }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchActivity.delete(`${baseUrl}/${id}`);

}
