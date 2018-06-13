import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyCZChUH9ksFaFLipi8Gy8OBN-v4DUhjbxI';

const App = () => {
  return (
    <div>
      <div>Hi!</div>
      <br />
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
