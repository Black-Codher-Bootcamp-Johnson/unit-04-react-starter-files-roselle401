
import React, {useState} from 'react';

import BookList from './components/BookList';



const App=(props)=> {
  function addBook(title) {
    console.log(`The Book ${title} was
   clicked`);
    }
   
  return <BookList addBook={addBook}/> 
}

export default App;





  
