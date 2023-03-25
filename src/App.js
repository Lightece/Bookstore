import React from 'react';
import './index.css';
import { Layout, Menu, theme} from 'antd';
import CartView from "./views/CartView";
import BookDetailView from "./views/BookDetailView";
import HomeView from "./views/HomeView";
const { Header, Footer } = Layout;
const nav_items = ["Home","Profile","Cart"];

const App = () => {

    return <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                flex="right"
                theme="light"
                mode="horizontal"
                float="right"
                defaultSelectedKeys={['2']}
                items={new Array(3).fill(null).map((_, index) => {
                    return {
                        index,
                        label: nav_items[index],
                    };
                })}
            />
        </Header>
        <HomeView/>
        <CartView></CartView>
        <BookDetailView/>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>
    </Layout>;
};
export default App;