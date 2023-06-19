import React, {useEffect, useState} from 'react'
import {Table} from 'antd';
import {getOrders} from "../services/OrderService";

const columns = [
    {
        title: '订单号',
        dataIndex: 'orderid',
    },
    {
        title: '收件人',
        dataIndex: 'receiver',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
    {
        title: '订单日期',
        dataIndex: 'orderdate',
        sorter: (a, b) => a.orderDate>b.orderDate,
        sortDirections: ['descend', 'ascend']
    },
    {
        title: '订单状态',
        dataIndex: 'orderstate',
    },
    {
        title: '总价',
        dataIndex: 'total',
    },

];

const subcolumns = [
    {
        title: '书籍',
        dataIndex: 'title',
        render:(text,record)=>(<a href={`/books/${record.book.bookid}`}>{record.book.title}</a>),
    },
    {
        title: '单价',
        dataIndex: 'price',
        render:(text,record)=>(<span>￥{record.book.price.toFixed(2)}</span>),
    },
    {
        title: '数量',
        dataIndex: 'quantity',
    },
    {
        title: '小计',
        key: 'subtotal',
        render: (text, record) => (
            <span>
                {(record.book.price * record.quantity).toFixed(2)}
            </span>
        ),
    },
];

const OrderList= () => {
    const [orders, setOrders] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    useEffect(() => {
        getOrders().then((res)=>{
                console.log(res);
                setOrders(res.data);
            }
        );
    },[]);
    const handleRowExpand = (expanded, record) => {
        setExpandedRows(prevState => {
            if (expanded) {
                return [...prevState, record.orderid];
            } else {
                return prevState.filter(rowid => rowid !== record.orderid);
            }
        });
    };
    return (
        <Table
            dataSource={orders}
            columns={columns}
            rowKey="orderid"
            expandable={{
                expandedRowRender:(record)=>(
                    <Table
                        dataSource={record.items}
                        columns={subcolumns}
                        pagination={false}
                        />
                ),
                rowExpandable:()=>true,
                expandedRowKeys:expandedRows,
                onExpand: handleRowExpand,
            }}
        />
    );
}

export default OrderList;
