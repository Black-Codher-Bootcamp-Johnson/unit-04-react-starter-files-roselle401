import React from 'react';
import App from '../App';
import Home from '../pages/Home';

const Search = (props) => {
    const { keyword, setKeyword, handleSubmit} = props;
    /*const handleSubmit = (event) =>{
        event.preventDefault();
        handleSubmit(keyword);
    }*/
    return (
      <div>
         <form onSubmit={(e) => handleSubmit(e)}> 
          <p style={{ color: "red" }}>
            <em>{keyword && "Keywords Typed: " + keyword}</em>
          </p>
          
          <label>Search</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  };
  export default Search;
  
