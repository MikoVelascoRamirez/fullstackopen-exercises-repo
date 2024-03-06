import axios from "axios";

const URL = '/api/persons';

const addNewContact = newObject => {
    const request = axios.post(URL, newObject);
    return request.then(response => response)
}

const getListOfContacts = () => {
    const request = axios.get(URL);
    return request.then(response => response)
}

const updateContact = objUpdated => {
    console.log(objUpdated)
    const request = axios.put(`${URL}/${objUpdated.id}`, objUpdated);
    return request.then(response => response)
}

const deleteContact = id => {
    const request = axios.delete(`${URL}/${id}`)
    return request.then(response => response)
}

export default {
    addNewContact,
    getListOfContacts,
    deleteContact,
    updateContact
}