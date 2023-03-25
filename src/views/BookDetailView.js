import React from 'react';
import {Breadcrumb, Button, Col, Layout, Menu, Row, theme} from 'antd';
import books from "../data/books";
import '../css/BookDetail.css';
const { Content } = Layout;


function findBookById(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books[i];
        }
    }
    return null;
}
const BookDetailView = ({book}) => {
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
                        title: 'Books',
                        href: '/',
                    },
                    {
                        title: book.title,
                        href: '/' + book.bookName,
                    }
                ]}
            />
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                }}
            >
                <div>
                    <Row align="top">
                        <Col span={1}></Col>
                        <Col span={5}>
                            <img
                                alt=""
                                src={require("../assets/"+book.bookName+".jpg")}
                                width={200}
                            />
                        </Col>
                        <Col span={2}></Col>
                        <Col span={8}>
                            <h1>{book.title}</h1>
                            <p>作者: {book.arthur}</p>
                            <h1>￥ {book.price}</h1>
                            <Button type="primary">
                                Add to Cart
                            </Button>
                        </Col>
                        <Col span={6}>
                            <p className="introduction">{book.intro}</p>
                        </Col>
                        <Col span={1}></Col>

                    </Row>
                </div>

            </div>
        </Content>
    )
}
export default BookDetailView;