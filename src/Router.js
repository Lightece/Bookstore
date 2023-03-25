import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProfileView from "./views/ProfileView";
import BookDetailView from "./views/BookDetailView";
import books from "./data/books";

const MyRouter=()=> {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeView/>}></Route>
                <Route exact path="/cart" element={<CartView/>}></Route>
                <Route exact path="/profile" element={<ProfileView/>}></Route>
                <Route exact path="/fu_chu_li_shi" element={<BookDetailView book={books[0]}/>}></Route>
                <Route exact path="/CSAPP" element={<BookDetailView book={books[1]}/>}></Route>
                <Route exact path="/the_razor's_edge" element={<BookDetailView book={books[2]}/>}></Route>
                <Route exact path="/out_of_control" element={<BookDetailView book={books[3]}/>}></Route>
                <Route exact path="/art_of_watching_films" element={<BookDetailView book={books[4]}/>}></Route>
                <Route exact path="/cereal13" element={<BookDetailView book={books[5]}/>}></Route>
            </Routes>
        </Router>
    );
}
export default MyRouter;