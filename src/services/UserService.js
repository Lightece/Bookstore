
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
            // 返回用户信息
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


export {  login, checkUserState, getUserInfo };