import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProfileView from "./views/ProfileView";
import BookDetailView from "./views/BookDetailView";
import OrderView from "./views/OrderView";
import LoginView from './views/LoginView';
import { checkUserState, login } from './services/UserService';
import AdminBooksView from "./views/AdminBooksView";

const MyRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        checkUser();
    }, [location]);

    const checkUser = async () => {
        try {
            const loggedIn = await checkUserState();
            setIsLoggedIn(loggedIn);
        } catch (error) {
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };

    const navigate = (to) => {
        setLocation(to);
    };
    const handleLogin = (userid, password) => {
        setIsLoggedIn(true);
        navigate("/");
    };



    if (isLoading) {
        // 渲染加载中的界面或组件
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomeView />}
                    onClick={() => navigate("/")}
                />
                <Route
                    path="/login"
                    element={
                    isLoggedIn? (
                        <Navigate to="/" replace={true} />
                    ) : (
                    <LoginView onLogin={handleLogin} />)}
                    onClick={() => navigate("/login")}
                />
                <Route
                    path="/cart"
                    element={
                        isLoggedIn ? (
                            <CartView />
                        ) : (
                            <Navigate to="/login" replace={true} />
                        )
                    }
                    onClick={() => navigate("/cart")}
                />
                <Route
                    path="/profile"
                    element={
                        isLoggedIn ? (
                            <ProfileView />
                        ) : (
                            <Navigate to="/login" replace={true} />
                        )
                    }
                    onClick={() => navigate("/profile")}
                />
                <Route
                    path="/orders"
                    element={
                        isLoggedIn ? (
                            <OrderView />
                        ) : (
                            <Navigate to="/login" replace={true} />
                        )
                    }
                    onClick={() => navigate("/orders")}
                />
                <Route
                    path="/books/:bookid"
                    element={<BookDetailView />}
                    onClick={() => navigate("/books/:bookid")}
                />
                <Route
                    path="/adminBooks"
                    element={<AdminBooksView />}
                    onClick={() => navigate("/adminBooks")}
                />
            </Routes>
        </Router>
    );
};

export default MyRouter;
