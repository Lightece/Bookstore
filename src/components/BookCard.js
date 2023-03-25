
import { Card } from 'antd';
const { Meta } = Card;

const BookCard = ({book}) => {

    return(
        <a href={"/" + book.bookName}>
            <Card
                hoverable
                style={{
                    width: 250,
                    margin: 25,
                }}
                cover={<img alt="example" src={require("../assets/"+book.bookName+".jpg")} />}
            >
                <Meta
                    title={book.title}
                    description={"Price: " + book.price}
                />

            </Card>
        </a>
    );
}
export default BookCard;