
async function login(userid, password) {
    const url = "http://localhost:8080/login";
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, password})
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else return null;
        });
}

async function checkUserState() {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const url = "http://localhost:8080/checkUser";
    if (!token) return Promise.reject('No token found');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, token})
    })
        .then(response => {
            if (!response.ok) throw new Error('User not authenticated');
            return response.json();
        })
        .then(data => {
            if(data.ok)return true;
            else return false;
        });
}async function checkAdmin() {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const url = "http://localhost:8080/checkAdmin";
    if (!token) return Promise.reject('No token found');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, token})
    })
        .then(response => {
            if (!response.ok) throw new Error('User is not Admin!');
            return response.json();
        })
        .then(data => {
            if(data.ok)return true;
            else return false;
        });
}

async function getUserInfo() {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const url = "http://localhost:8080/getUserInfo";
    if (!token) return Promise.reject('No token found');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, token})
    })
        .then(response => {
            return response.json();
        });
}

async function setUserStatus(userid, status) {
    const token = localStorage.getItem('token');
    const adminid = localStorage.getItem('userid');
    const url = "http://localhost:8080/setUserStatus";
    if (!token) return Promise.reject('No token found');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({adminid, token, userid, status})
    })
        .then(response => {
            return response.json();
        });
}

async function getUserList(type) {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');
    const url = "http://localhost:8080/getUserList";
    if (!token) return Promise.reject('No token found');
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userid, token, type})
    })
        .then(response => {
            return response.json();
        });
}


export {  login, checkUserState, getUserInfo, checkAdmin, setUserStatus, getUserList };