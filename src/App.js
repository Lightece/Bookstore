import React, {useState} from 'react';
import './css/App.css';
import { Layout, Menu} from 'antd';
import {Route, Routes, Router, Link} from "react-router-dom";
import MyRouter from "./Router";
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProfileView from "./views/ProfileView";
import BookDetailView from "./views/BookDetailView";
import books from "./data/books";

const { Header, Footer } = Layout;

const nav_items = [
    {
        key: 'home',
        label: <a href={"/"}>Home</a>,

    },
    {
        key: "profile",
        label: <a href={"/profile"}>Profile</a>,
    },
    {
        key: "cart",
        label: <a href={"/cart"}>Cart</a>,
    }
];


const App = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Layout className="layout">
        <Header left="0">
            <div className="logo" />
            <Menu
                onClick={onClick}
                theme="light"
                mode="horizontal"
                float="right"
                items={nav_items}
            />
        </Header>
        <div style={{height: '80px',}}>
            你发现了彩蛋！
        </div>
        <MyRouter/>

        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            闲书 · 阅闲悦自由 ©2023 Created by ZYH
        </Footer>
    </Layout>;
};
export default App;