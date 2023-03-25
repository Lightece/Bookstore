import React from 'react';
import {Avatar, Breadcrumb, Col, Layout, Row, theme} from 'antd';
import {UserOutlined, SettingOutlined} from "@ant-design/icons";
const { Content } = Layout;

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
                    <Row>

                        <Col span={6} offset={1}>
                            <Avatar size={120} icon="我" />
                        </Col>
                        <Col span={6}>
                            <h1>Username：Sleep</h1>
                            <h1>Tel: 133-3333-3333</h1>
                        </Col>
                        <Col span={6}>
                            <h1>Slogan: While(1)Sleep();</h1>
                            <h1>Address: 东川路800号</h1>
                        </Col>
                        <Col span={4}>
                            <SettingOutlined key="setting" size={60} />
                        </Col>

                    </Row>
                </div>
            </div>
        </Content>
    );
}
export default ProfileView;