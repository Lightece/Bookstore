async function getOrders(){
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem('token');
    const url = "http://localhost:8080/getOrders";
    console.log("getOrders: " + userid + " " + token);
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, token})
    })
        .then ((data) => {
            return data.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

async function submitOrder({order}){
    return await fetch("http://localhost:8080/submitOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then ((data) => {
            return data.json();
        })
        .catch((error) => {
            console.log(error);
        })
}
export {getOrders, submitOrder}