// card from antd
// include book cover, price, time to be ordered, and a button to delete
import {Card, Col, Row, Checkbox} from 'antd';
import '../css/OrderCard.css';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
const OrderCard = ({book}) => (

        <Card
            hoverable
            style={{
                width: 1080,
                margin: 10,
            }}
        >
            <Row>
                <Col span="1"></Col>
                <Col span="5">
                    <img
                        alt=""
                        src={require("../assets/"+book.bookName+".jpg")}
                        width={100}
                    />
                </Col>
                <Col span="1"></Col>
                <Col span="1"></Col>
                <Col span="8">
                    <h2>{book.title}</h2>
                    <p>description</p>
                </Col>
                <Col span="1"></Col>
                <Col span="4">
                    <h1>{book.price}</h1>
                </Col>
                <Col span="1"></Col>
                <Col span="1">
                    <Checkbox onChange={onChange}></Checkbox>
                </Col>
                <Col span="2"></Col>
            </Row>
        </Card>
);
export default OrderCard;