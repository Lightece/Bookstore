import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, message } from "antd";
import { getBookList, updateBook, addBook, deleteBook } from "../services/BookService";

const AdminBooksView = () => {
    const [bookList, setBookList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const [form] = Form.useForm();

    const fetchBookList = async () => {
        try {
            const res = await getBookList();
            const data = res.data;
            console.log(res);
            setBookList(data);
        } catch (error) {
            console.log("Error fetching book list:", error);
        }
    };


    useEffect(() => {
        fetchBookList();
    }, []);

    const showAddModal = () => {
        form.resetFields();
        setSelectedBook(null);
        setIsModalVisible(true);
    };

    const showEditModal = (book) => {
        form.setFieldsValue(book);
        setSelectedBook(book);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedBook(null);
    };

    const handleSave = async (values) => {
        try {
            if (selectedBook) {
                const userid = localStorage.getItem("userid");
                const token = localStorage.getItem("token");
                await updateBook({ ...selectedBook, ...values }, userid, token);
                message.success("Book updated successfully");
                setSelectedBook(null);
            } else {
                const userid = localStorage.getItem("userid");
                const token = localStorage.getItem("token");
                await addBook(values, userid, token);
                message.success("Book added successfully");
            }
            setIsModalVisible(false);
            fetchBookList();
        } catch (error) {
            console.log("Error saving book:", error);
            message.error("Failed to save book");
        }
    };

    const handleDelete = async (book) => {
        try {
            const userid = localStorage.getItem("userid");
            const token = localStorage.getItem("token");
            await deleteBook(book.bookid, userid, token);
            message.success("Book deleted successfully");
            fetchBookList();
        } catch (error) {
            console.log("Error deleting book:", error);
            message.error("Failed to delete book");
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, book) => (
                <span>
          <Button type="link" onClick={() => showEditModal(book)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(book)}>
            Delete
          </Button>
        </span>
            ),
        },
    ];

    return (
        <div className="content">
            <Button type="primary" onClick={showAddModal}>
                Add Book
            </Button>
            <Table dataSource={bookList} columns={columns} rowKey="bookid" />

            <Modal
                title={selectedBook ? "Edit Book" : "Add Book"}
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={form.submit}
            >
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={selectedBook && selectedBook.cover &&selectedBook.cover!=""? (selectedBook.cover):("http://myimg.lightece.top/bookstore/assets/cover_undefined.png") }
                     alt={selectedBook? (selectedBook.title):("undefined")}
                     style={{ maxWidth: "80%", margin:"0 auto", maxHeight:"400px"}} />
                </div>
                <Form form={form} layout="vertical" onFinish={handleSave}>
                    <Form.Item
                        name="title"
                        label="标题"
                        rules={[{ required: true, message: "Please enter the book title" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="作者"
                        rules={[{ required: true, message: "Please enter the book author" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="价格"
                        rules={[{ required: true, message: "Please enter the book price" }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="stock"
                        label="库存"
                        rules={[{ required: true, message: "Please enter the book stock" }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="cover"
                        label="书籍封面url"
                        >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminBooksView;
