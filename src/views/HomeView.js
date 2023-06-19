import React, {useEffect} from 'react';
import '../css/HomeView.css';
import {Breadcrumb, Col, Layout, Row, theme, Carousel, List} from 'antd';
import BookCard from "../components/BookCard";
import {getBookList} from "../services/BookService";
const { Content } = Layout;


const HomeView = () => {
    const {
        token: { colorBgContainer},
    } = theme.useToken();
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        getBookList().then((res)=>{
                setBooks(res.data);
                console.log(res.data);
            }
        );
    },[]);
    return (
        <Content className="content-container">
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
                items={[
                    {
                        title: '首页',
                        href: '/',
                    },
                    {
                        title: '书籍列表',
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
                <List
                    dataSource={books}
                    grid={{gutter: 16, column:4}}
                    renderItem={(item)=>(
                        <List.Item>
                            <BookCard book={item}/>
                        </List.Item>
                    )}/>
                {/*<Row>*/}
                {/*    <Col span={6}>*/}
                {/*        <BookCard bookid={1}/>*/}
                {/*    </Col>*/}
                {/*    <Col span={6}>*/}
                {/*        <BookCard bookid={2}/>*/}
                {/*    </Col>*/}
                {/*    <Col span={6}>*/}
                {/*        <BookCard bookid={3}/>*/}
                {/*    </Col>*/}
                {/*    <Col span={6}>*/}
                {/*        <BookCard bookid={4}/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        </Content>
    );
}

export default HomeView;