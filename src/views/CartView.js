import React from 'react';
import {Breadcrumb, Col, Layout, Menu, Row, theme, Checkbox} from 'antd';
import OrderCard from "../components/OrderCard";
const { Content } = Layout;
const books=[
    {
        id: 1,
        title: "浮出历史地表",
        bookName: "fu_chu_li_shi",
        arthor:"戴锦华",
        price: 200,
    },
    {
        id: 2,
        title: "CS:APP",
        bookName: "CSAPP",
        arthor:"Randal E. Bryant",
        price: 157,
    },
    {
        id: 3,
        title: "The Razor's Edge",
        bookName: "the_razor's_edge",
        arthor:"William Somerset Maugham",
        price: 100,
    },
    {
        id: 4,
        title: "Out of Control",
        bookName: "out_of_control",
        arthor:"Kevin Kelly",
        price: 100,
    },
    {
        id: 5,
        title: "Art of Watching Films",
        bookName: "art_of_watching_films",
        arthor:"David Bordwell",
        price: 100,
    },
    {
        id: 6,
        title: "谷物13：成为自己",
        bookName: "cereal13",
        arthor:"Rosa Park",
        price: 100,
    }
]

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
            >
                <Breadcrumb.Item>Bookstore</Breadcrumb.Item>
                <Breadcrumb.Item>Cart</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                    padding: 50,
                }}
            >
                <h1>My Shopping Cart</h1>
                <div className="CartList">
                    <Checkbox>Check All</Checkbox>
                    <OrderCard book={books[0]}/>
                    <OrderCard book={books[1]}/>
                    <OrderCard book={books[2]}/>
                </div>


            </div>
        </Content>
    )
}
export default CartView;