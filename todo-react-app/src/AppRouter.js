import React from 'react';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';

function Copyright(){
    return(
        <Typography variant='body2' color='textSecondary' align='center'>
            {"Copyright ⓒ"}
            fsoftwareenengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function AppRouter(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </div>
            <div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;