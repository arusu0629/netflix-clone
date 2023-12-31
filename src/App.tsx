import React from 'react';
import logo from './logo.svg';
import './App.css';
import { requests } from './request';
import { Row } from './Row';
import { Banner } from './components/Banner';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feachHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Document Movies" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
