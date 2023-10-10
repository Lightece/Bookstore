import React, { useState} from 'react';
import { login} from "../services/UserService";
import {Button, message} from "antd";
import "../css/LoginView.css";

const LoginView = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userid === '' || password === ''){
            message.error("用户名或密码不能为空！");
            return;
        }
        const res = await login(userid, password);
        if (res.ok) {
            message.success("登录成功！");
            // console.log(res.data);
            sessionStorage.setItem("userid", res.data.userid);
            sessionStorage.setItem("nickname", res.data.nickname);
            sessionStorage.setItem("avatar", res.data.avatar);
            window.location.href = "/";
        } else {
            message.error(res.message);
        }
    };

    return (
        <div>
            <div style={{display:"flex"}}>
                <img src="http://myimg.lightece.top/bookstore/assets/logo.png" alt="logo" style={{margin:"0px auto",width:"300px"}}/>
            </div>


        <div className="login-card">
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="UserID"
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">登录</button>
                <Button type="link" href="/register">注册</Button>
            </form>
        </div>
        </div>
    );
};

export default LoginView;
