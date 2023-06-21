import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { checkAdmin } from "../services/UserService";
import AdminView from "../views/Admin/AdminView";
import BasicView from "../views/BasicView";
import LoginView from "../views/LoginView";

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

    const handleLogin = (userid) => {
        setIsLoggedIn(true);
        window.location.href="/";
    };

    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<AdminView />} />
                <Route path="/login" element={<LoginView onLogin={handleLogin}/>} />
                <Route
                    path="/*"
                    element={isAdmin ? <Navigate to="/admin/books" /> : <BasicView />}
                />
            </Routes>
        </Router>
    );
};

export default BasicRouter;
