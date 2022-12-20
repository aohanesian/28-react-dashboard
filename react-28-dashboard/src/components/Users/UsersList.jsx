import React from 'react';
import UseUsers from "../../hooks/useUsers";
import {Link} from 'react-router-dom'


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function UsersList() {

    const {users, deleteUser} = UseUsers()

    // return (
    //     <ul>
    //         {users.map(user => <li key={user.id}>{user.name}
    //             <Link to={`/${user.id}`}>Edit</Link>
    //             <button onClick={() => deleteUser(user.id)}>Delete</button>
    //         </li>)}
    //     </ul>
    // );

    return (
        <List>
            {users.map(user =>
                <ListItem key={user.id}>
                    <ListItemText primary={user.name}/>
                    <Stack spacing={2} direction="row">
                        <Button component={Link} to={`/${user.id}`} variant="outlined">Edit</Button>
                        <Button onClick={() => deleteUser(user.id)} variant="outlined"
                                color="error">Delete</Button>
                    </Stack>
                </ListItem>
            )}
        </List>
    )
}



