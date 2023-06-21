import React, { useState, useEffect } from "react";
import {Table, Button, Modal, Form, Input, InputNumber, message, theme} from "antd";
import {getBookList, updateBook, addBook, deleteBook, setBookStatus} from "../../services/BookService";

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

    const handleStatus = async (book,status) => {
        try {
            const userid = localStorage.getItem("userid");
            const token = localStorage.getItem("token");
            await setBookStatus(book.bookid, userid, token, status);
            if(status)message.success("已下架！")
            else message.success("已上架！");
            fetchBookList();
        } catch (error) {
            console.log("Error cahnging book status:", error);
            message.error("出错啦，请重试");
        }
    };

    const {
        token: { colorBgContainer},
    } = theme.useToken();

    const columns = [
        {
            title: "标题",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "作者",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "ISBN",
            dataIndex: "isbn",
            key: "isbn",
        },
        {
            title: "价格",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "库存",
            dataIndex: "stock",
            key: "stock",
        },
        {
            title:"状态",
            key:"status",
            render: (status,book) => (
                <div style={{minWidth:"40px"}}>{book.status===0?("在售"):("下架")}</div>
            ),
        },
        {
            title: "操作",
            key: "actions",
            render: (_, book) => (
                <div style={{display:"flex"}}>
          <Button type="link" onClick={() => showEditModal(book)} style={{margin:"0"}}>
            编辑
          </Button>
          <Button type="link" onClick={() => handleStatus(book,0)} style={{margin:"0"}}>
            上架
          </Button>
          <Button type="link" danger onClick={() => handleStatus(book,1)} style={{margin:"0"}}>
            下架
          </Button>
        </div>
            ),
        },
    ];

    return (
        <div className="content"
             style={{background: colorBgContainer, padding:"30px"}}
        >
            <h1>管理书籍</h1>

            <Button type="primary" onClick={showAddModal}>
                Add Book
            </Button>
            <Table dataSource={bookList} columns={columns} rowKey="bookid" />
            <Modal
                title={selectedBook ? "编辑书籍信息" : "新增书籍"}
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={form.submit}
            >
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    {selectedBook?(<img src={(selectedBook && selectedBook.cover && selectedBook.cover!=="")? (selectedBook.cover):("http://myimg.lightece.top/bookstore/assets/cover_undefined.png") }
                         alt={selectedBook? (selectedBook.title):("undefined")}
                         style={{margin:"0 auto"}} />):(<></>)}
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
                        name="isbn"
                        label="ISBN"
                        rules={[{ required: true, message: "Please enter the book ISBN" }]}
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
