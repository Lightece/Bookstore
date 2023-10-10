import React, {useEffect, useState} from 'react';
import '../css/Basic.css';
import {Button, Layout, Menu} from 'antd';
import UserRoute from "../Routers/UserRoute";
import {getUserInfo, login, logout} from "../services/UserService";

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


const BasicView = () => {
    const [userid, setUserid] = useState(sessionStorage.getItem("userid"));
    const [nickname, setNickname] = useState(sessionStorage.getItem("nickname"));
    const [avatar, setAvatar] = useState(sessionStorage.getItem("avatar"));
    const logOut= async() => {
        const res = await logout();
        console.log(res);
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("nickname");
        sessionStorage.removeItem("avatar");
        setUserid(null);
        setNickname(null);
        setAvatar(null);
        // window.location.href = "/";
    }

    const gotoProfile = () => {
        window.location.href = "/profile";
    }

    return <Layout className="layout">
        <Header left="0">
            <div className="logo" />
            <div style={{ float: 'right' }}>
                {userid==null?(
                    <div>
                        <span style={{ marginRight: 20 }}>当前为游客模式浏览</span>
                        <Button>
                            <a href={"/login"}>登录</a>
                        </Button>
                    </div>
                ):(
                    <div style={{display:"block", alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <img src={avatar} alt="user" className="smallAvatar" alt="个人中心" style={{ margin:"auto 10px"}} onClick={gotoProfile}/>
                            <span style={{ margin:"auto 10px" }}>{"欢迎您，"+nickname+"!"}</span>
                            <Button  size="middle" onClick={logOut} style={{margin:"auto 20px"} }>
                                登出
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                float="right"
                items={nav_items}
            />

        </Header>
        <UserRoute/>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            闲书·阅闲悦自由 ©2023 Created by zyh
        </Footer>
    </Layout>;
};
export default BasicView;