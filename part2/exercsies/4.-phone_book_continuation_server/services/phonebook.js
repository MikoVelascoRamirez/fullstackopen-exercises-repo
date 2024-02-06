import axios from "axios";

const URL = 'http://localhost:3001/persons';

const addNewContact = newObject => {
    const request = axios.post(URL, newObject);
    return request.then(response => response)
}

const getListOfContacts = () => {
    const request = axios.get(URL);
    return request.then(response => response)
}

export default {
    addNewContact,
    getListOfContacts
}