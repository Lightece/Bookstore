import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { checkAdmin } from "../services/UserService";
import AdminView from "../views/Admin/AdminView";
import BasicView from "../views/BasicView";
import LoginView from "../views/LoginView";
import SignUpView from "../views/SignUpView";

const BasicRouter = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkIsAdmin();
    }, []);

    const checkIsAdmin = async () => {
        try {
            const ad = await checkAdmin();
            setIsAdmin(ad);
        } catch (error) {
            setIsAdmin(false);
        }
    };
    const handleRegister = () => {
        window.location.href="/login";
    };
    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<AdminView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<SignUpView onRegister={handleRegister}/>} />
                <Route
                    path="/*"
                    element={isAdmin ? <Navigate to="/admin/books" /> : <BasicView />}
                />
            </Routes>
        </Router>
    );
};

export default BasicRouter;
