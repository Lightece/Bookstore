import React, {useState} from 'react';
import './css/App.css';
import {Button, Layout, Menu} from 'antd';
import MyRouter from "./Router";

const { Header, Footer } = Layout;

const nav_items = [
    {
        key: 'home',
        label: <a href={"/"}>首页</a>,

    },
    {
        key: "profile",
        label: <a href={"/profile"}>账户</a>,
    },
    {
        key: "cart",
        label: <a href={"/cart"}>购物车</a>,
    },
    {
        key: "order",
        label: <a href={"/orders"}>订单</a>,
    }
];

const logout= () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/";
}
const App = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return <Layout className="layout">
        <Header left="0">
            <div className="logo" />
            <div style={{ float: 'right' }}>
                <Button type="primary" size="large" onClick={logout}>
                    退出
                </Button>
            </div>
            <Menu
                onClick={onClick}
                theme="light"
                mode="horizontal"
                float="right"
                items={nav_items}
            />

        </Header>
        <MyRouter/>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            闲书·阅闲悦自由 ©2023 Created by zyh
        </Footer>
    </Layout>;
};
export default App;