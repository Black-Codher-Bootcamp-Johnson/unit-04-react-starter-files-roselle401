import React from 'react';

function Book(props) {
  return (
    <div className="book" onClick={() => props.addBook(props.book.id)}>

      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title + 'book cover'}></img>
      <h2>{props.book.volumeInfo.title}</h2>
      <p>{props.book.volumeInfo.saleInfo?.retailPrice}</p>
    </div>
  );
 
  }


export default Book;
