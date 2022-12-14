import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword.jsx';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders';
import '../styles/global.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter basename='/commerce' >
            <Layout>
        <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/login" element={<Login/>} />
                <Route  path="/recovery-password" element={<RecoveryPassword/>} />
                <Route  path="/send-email" element={<SendEmail/>} />
                <Route  path="/new-password" element={<NewPassword/>} />
                <Route  path="/account" element={<MyAccount/>} />
                <Route  path="/signup" element={<CreateAccount/>} />
                <Route  path="/checkout" element={<Checkout/>} />
                <Route  path="/orders" element={<Orders/>} />
                <Route path='*' element={<NotFound/>} />
        </Routes>
            </Layout>
    </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
