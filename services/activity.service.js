import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import { deleteImageByUrl } from "/pages/firebase/config";

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
    getByUserId,
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
async function getByUserId(userId) {
    try {
        const response = await fetch(`${baseUrl}/activities?${new URLSearchParams({ userId })}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching persons by userId:', error);
        throw error; // Re-lanzar el error para manejarlo en el componente
    }
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

   try {
        const activity = await getById(id);
        if (activity && activity.imageUrl && Array.isArray(activity.imageUrl)) {
            const deleteImagePromises = activity.imageUrl.map(url =>
                deleteImageByUrl(url),
                console.log('delete img')
            );
            await Promise.all(deleteImagePromises);
        }
        await fetchActivity.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.error("Failed to delete activity or images:", error);
    }
}
