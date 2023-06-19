import React from 'react';
import {List} from 'antd'
import {BookCard} from './BookCard';
import {getBookList} from "../services/bookService";
class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {

        const callback = (data) => {
            this.setState({books: data});
        };

        getBookList({"search": null}, callback);

    }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Book info={item}/>
                    </List.Item>
                )}
            />
        );
    }
}
export default BookList;