import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, message } from "antd";
import {getOrderList} from "../../services/OrderService";

const AdminOrdersView = () =>{
    const [orderList, setOrderList] = useState([]);

    const fetchOrderList = async() =>{
        try{
            const res = await getOrderList();
            console.log(res);
            setOrderList(res.data);
        }catch(error){
            console.log("Error fetching order list",error);
            message.error("获取订单列表失败");
        }
    }

}

export default AdminOrdersView;