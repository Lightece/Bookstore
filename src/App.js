import React, {useState} from 'react';
import {Button, Layout, Menu} from 'antd';
import BasicRouter from "./Routers/BasicRouter";
import AdminOrdersView from "./views/Admin/AdminOrdersView";
import CartView from "./views/User/CartView";
const App = () => {
    return <BasicRouter/>;
};
export default App;