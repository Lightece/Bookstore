import React from 'react';
import {Breadcrumb,  Layout,  theme, Checkbox} from 'antd';
import OrderCard from "../components/OrderCard";
import books from "../data/books";
import "../css/CartView.css";
const { Content } = Layout;
const CartView = () => {
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
                        title: 'Cart',
                        href: '/cart',
                    },
                ]}
            />
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                    padding: 50,
                }}
            >
                <h1>My Shopping Cart</h1>
                <div>
                    <Checkbox className="AllCheck">All</Checkbox>
                </div>
                <div className="CartList">
                    <OrderCard book={books[0]}/>
                    <OrderCard book={books[1]}/>
                    <OrderCard book={books[2]}/>
                </div>

            </div>
        </Content>
    )
}
export default CartView;