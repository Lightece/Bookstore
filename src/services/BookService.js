import "../css/AdminView.css"
const url = "http://localhost:8080";

async function getBookById(id) {
    return await fetch(url+"/getBookById?id="+id, {
        method: "GET",
    })
        .then ((data) => {
            return data.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

async function getBookList() {
    return await fetch("http://localhost:8080/getBookList", {
        method: "GET",
    })
        .then ((data) => {
            return data.json();
        })
        .catch((error) => {
            console.log(error);
        })
}

async function updateBook(book, userid, token) {
    return await fetch("http://localhost:8080/updateBook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userid,token, book}),
    }).then((data) => {
        return data.json();
    });
}

async function deleteBook(bookid, userid, token) {
    return await fetch("http://localhost:8080/deleteBook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userid, token, bookid}),
    }).then((data) => {
        // alert(JSON.stringify(userid, token, bookid.bookid));
        return data.json();
    });
}

async function addBook(book, userid, token) {
    return await fetch("http://localhost:8080/updateBook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userid,token, book}),
    }).then((data) => {
        // alert(JSON.stringify({userid,token, book}));
        return data.json();
    });
}

export {getBookById, getBookList, updateBook, deleteBook, addBook};