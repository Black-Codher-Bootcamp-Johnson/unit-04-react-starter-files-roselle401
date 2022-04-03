import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BookList from "../components/BookList";
import Search from "../components/Search";


const Home = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <Header />
            <h2>This is your personal bookcase</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}

export default Home;
