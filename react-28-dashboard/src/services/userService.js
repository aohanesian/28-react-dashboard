const API = `https://jsonplaceholder.typicode.com/users`;

export const getUsers = () => fetch(API).then(data => data.json());

export const getUser = userId => fetch(API + `/${userId}`).then(data => data.json());

export const deleteUser = userId => fetch(API + `/${userId}`, {method: `DELETE`}).then(data => data.json());

export const updateUser = (userId, obj) => fetch(API + `/${userId}`, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

export const addUser = (obj) => fetch(API, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());