import React, {useEffect, useState} from 'react';
import {getUsers, deleteUser as removeItem} from "../services/userService";

function UseUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            setUsers(await getUsers());
        })();
    }, []);

    const deleteUser = async id => {
        await removeItem(id);
        setUsers(prevState => prevState.filter(user => user.id !== id));
    };

    return {users, deleteUser};

}

export default UseUsers;