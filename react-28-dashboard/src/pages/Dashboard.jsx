import React, {Fragment} from 'react';
import UsersList from '../components/Users/UsersList'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Dashboard() {
    return (
        <Fragment>
            <h1>Users</h1>

            <Button variant="contained" component={Link} to="createuser">Create user</Button>
            <UsersList/>
        </Fragment>
    );
}