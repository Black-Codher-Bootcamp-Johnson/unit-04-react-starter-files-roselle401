import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css';
import Header from '../src/components/Header';
import BookList from './components/BookList';
import About from './pages/About';
import data from './models/local-books.json';
import Search from './components/Search';

import Bookcase from './pages/Bookcase';
import Home from '../src/pages/Home';




const App = () => {
  const [keyword, setKeyword,] = useState("");
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = true;
      }
      return book;
    }
    )]);
  }
  async function findBook(keyword) {
   
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());
    setBooks(results.items);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(keyword);
    findBook(keyword);
  };
 /* return (
    <Router>
      <>
      <Search
      setKeyword={setKeyword}
      keyword={keyword}
      handleSubmit={handleSubmit}
      />
    </Router>*/
  

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter(book => book.id !== id));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = false;
      }
      return book;
    }
    )]);
  }

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });


  return (
<div className="container">
        <Router>
         <Routes>
        <Route exact path="/" 
        element={<Home books={books} addBook={addBook}></Home>}
        />
        
        {() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <Search setKeyword={setKeyword} keyword={keyword} handleSubmit={handleSubmit} />
            <BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} 
        <Route>
        <Route path="/bookcase"
         element={<Bookcase books={books} addBook={addBook}></Bookcase>} />
         {() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
         )} /
          </Route>);
          
         
         
        <Route path="/about"
         element={<About books={books} addBook={addBook}></About> }/>
        {() => <About bookLength={bookcase.length} />} 
      </Routes>
    </Router>
      </div>
   
    
    
  

         )};
        
        function addBook(title) {
          console.log('The Book ${title} was clicked');
        };
  
    

export default App;

