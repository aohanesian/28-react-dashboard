import React from 'react';
import {useParams, Link, useNavigate} from "react-router-dom";
import useUser from "../../hooks/useUser";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UserForm({createUser}) {

    const navigation = useNavigate();
    const {userId} = useParams();
    const {user, changeInput, createUser: create, changeUser: change} = useUser(userId);
    const changeFormInput = (e) => {
        changeInput(e.target.name, e.target.value)
    };
    const submitForm = async (e) => {
        e.preventDefault();
        await createUser ? await create() : await change();
        navigation(`/`);
    }

    return (
        <Box sx={{
            '& .MuiTextField-root': {m: 1, width: '25ch'},
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `enter`
        }} component={"form"} onSubmit={submitForm}>
            <TextField label="Name" name="name" value={user.name} onBlur={changeFormInput}/>
            <TextField label="Username" name="username" value={user.username} onBlur={changeFormInput}/>
            <TextField label="Email" name="email" type={"email"} value={user.email} onBlur={changeFormInput}/>
            <TextField label="City" name="address.city" value={user.address?.city} onBlur={changeFormInput}/>
            <TextField label="Street" name="address.street" value={user.address?.street} onBlur={changeFormInput}/>

            <Stack spacing={2} direction="row">
                <Button type={'submit'} variant="outlined">{createUser ? 'Create user' : 'Save'}</Button>
                <Button component={Link} to="/" variant="outlined" color="error">Cancel</Button>
            </Stack>

        </Box>
    );
}

export default UserForm;

// <label>
//     Name <input type="text" name="name" defaultValue={user.name} onBlur={changeFormInput}/>
// </label>
// <label>
//     Username <input type="text" name="username" defaultValue={user.username} onBlur={changeFormInput}/>
// </label>
// <label>
//     Email <input type="email" name="email" defaultValue={user.email} onBlur={changeFormInput}/>
// </label>
// <label>
//     City <input type="text" name="address.city" defaultValue={user.address?.city} onBlur={changeFormInput}/>
// </label>
// <label>
//     Street <input type="text" name="address.street" defaultValue={user.address?.street}
//                   onBlur={changeFormInput}/>
// </label>