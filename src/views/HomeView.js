import React from 'react';
import '../index.css';
import {Breadcrumb, Col, Layout, Row, theme, Carousel} from 'antd';
import books from "../data/books";
import BookCard from "../components/BookCard";
const { Content } = Layout;


const HomeView = () => {
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
                ]}
            />
            <div
                className="site-layout-content"
                style={{
                    background: colorBgContainer,
                }}
            >
                <Carousel autoplay>
                    <div>
                        <img
                            alt="example"
                            src={require("../assets/discount.png")}
                        />
                    </div>
                    <div>
                        <img
                            alt="example"
                            src={require("../assets/spring.png")}
                        />
                    </div>
                    <div>
                        <img
                            alt="example"
                            src={require("../assets/discount.png")}
                        />
                    </div>
                    <div>
                        <img
                            alt="example"
                            src={require("../assets/spring.png")}
                        />
                    </div>
                </Carousel>
                <Row>
                    <Col span={6}>
                        <BookCard book={books[1]}/>
                        <BookCard book={books[4]}/>
                    </Col>
                    <Col span={6}>
                        <BookCard book={books[2]}/>
                        <BookCard book={books[5]}/>
                    </Col>
                    <Col span={6}>
                        <BookCard book={books[3]}/>
                    </Col>
                    <Col span={6}>
                        <BookCard book={books[0]}/>
                    </Col>

                </Row>
            </div>
        </Content>
    );
}

export default HomeView;