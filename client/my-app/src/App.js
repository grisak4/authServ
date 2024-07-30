import React, { useState } from 'react';
import './index.css';
import {Routes, Router, Route} from 'react-router-dom'
import HomePages from './pages/homePage';
import LoginPages from './pages/loginPages';
import RegisterPages from './pages/registerPages'


const AuthForm = () => {
    return (
        <Routes>
            <Route exact path='/' Component={HomePages}/>
            <Route exact path='/login' Component={LoginPages}/>
            <Route exact path='/register' Component={RegisterPages}/>
        </Routes>
    );
};

export default AuthForm;