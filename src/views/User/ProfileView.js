import React, {useEffect} from 'react';
import { Breadcrumb, Col, Layout, Row, theme} from 'antd';
import {getUserInfo} from "../../services/UserService";
import { SettingOutlined} from "@ant-design/icons";
import "../../css/ProfileView.css";

const { Content } = Layout;

const UserDisplay = () => {
    const [userInfo, setUserInfo] = React.useState({});
    useEffect(() => {
        getUserInfo().then((res)=>{
                setUserInfo(res.data);
            }
        );
    },[]);

    if (userInfo != null){
        return (<Row>
            <Col span={6} offset={1}>
                <img src={userInfo.avatar} alt="user" className="avatar"/>
            </Col>
            <Col span={6}>
                <h1>昵称: {userInfo.nickname}</h1>
                <h1>电话: {userInfo.tel}</h1>
            </Col>
            <Col span={8}>
                <h1>邮箱: {userInfo.email}</h1>
                <h1>地址: {userInfo.address}</h1>
            </Col>

        </Row>);
    }
}


const ProfileView = () => {
    const {
        token: { colorBgContainer},
    } = theme.useToken();

    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
                items={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Profile',
                        href: '/profile',
                    },
                ]}
            />
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                }}
            >
                <div>
                    <UserDisplay/>
                </div>
            </div>
        </Content>
    );
}
export default ProfileView;