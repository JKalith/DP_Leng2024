import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchPerson } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/persons`;
const personSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('person')));

export const personService = {
    person: personSubject.asObservable(),
    get personValue() { return personSubject.value },
    register,
    getAll,
    getById,
    update,
    delete: _delete
};



async function register(person) {
    await fetchPerson.post(`${baseUrl}/`, person);
}

async function getAll() {
    return await fetchPerson.get(baseUrl);
}

async function getById(id) {
    return await fetchPerson.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    await fetchPerson.put(`${baseUrl}/${id}`, params);

    // update stored user if the logged in user updated their own record
    if (id === personSubject.value.id) {
        // update local storage
        const person = { ...personSubject.value, ...params };
        localStorage.setItem('person', JSON.stringify(person));

        // publish updated user to subscribers
        personSubject.next(person);
    }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await personSubject.delete(`${baseUrl}/${id}`);

}
