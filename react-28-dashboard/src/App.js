import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Container from '@mui/material/Container';



function App() {
    return (
        <Container maxWidth={"sm"}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/:userId"} element={<EditUser/>}/>
                <Route path={"/createuser"} element={<CreateUser/>}/>
            </Routes>
        </BrowserRouter>
        </Container>
    );
}

export default App;