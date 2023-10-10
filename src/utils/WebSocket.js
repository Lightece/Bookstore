export const waitOrderInfo = (userId, handleMessage) => {
    // 创建WebSocket连接
    const socket = new WebSocket('ws://localhost:8080/websocket/' + userId);

    // 连接建立时触发
    socket.onopen = () => {
        console.log('WebSocket连接已建立');
        // 发送测试请求给后端
        const message = { type: 'testRequest', content: '测试请求' };
        socket.send(JSON.stringify(message));
    };

    // 接收到消息时触发
    socket.onmessage = (event) => {
        const receivedMessage = JSON.parse(event.data);
        console.log('接收到消息：', receivedMessage);
        handleMessage(receivedMessage);
    };

    // 连接关闭时触发
    socket.onclose = () => {
        console.log('WebSocket连接已关闭');
    };

    // 重新连接WebSocket
    const reconnectWebSocket = () => {
        console.log('尝试重新连接WebSocket...');
        setTimeout(() => {
            waitOrderInfo(userId, handleMessage);
        }, 5000); // 每隔5秒尝试重新连接
    };

    // 发生错误时触发，尝试重新连接
    socket.onerror = (error) => {
        console.log('WebSocket发生错误:', error);
        reconnectWebSocket();
    };
};
