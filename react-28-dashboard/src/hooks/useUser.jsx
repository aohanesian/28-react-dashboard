import React, {useEffect, useState} from 'react';
import {getUser, updateUser, addUser} from "../services/userService";


function UseUser(userId) {
    const [user, setUser] = useState({
        name:``,
        username:``,
        email:``,
        address:{
            city:``,
            street:``,
        }
    });
    useEffect(() => {
        (async () => {
            userId && setUser(await getUser(userId));
        })();
    }, []);

    const changeInput = (name, value) => {
        setUser(prevState => ({...prevState, [name]: value}))
    }

    const changeUser = async () => {
        await updateUser(user.id, user)
    };

    const createUser = async () => {
        await addUser(user.id, user)
    };

    return {user, changeInput, changeUser, createUser};
}

export default UseUser;