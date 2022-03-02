 import React,{useState} from 'react';
 import Book from "./Book.js"
 import bookData from '../models/books.json';

function BookList (props) {
    const [books] = useState(bookData);

    return books.map(bookItem => <Book book={bookItem} addBook={props.addBook}/>);
    

       
}
export default BookList

