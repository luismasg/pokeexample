import React, { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/search';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [pokeIndex, setpokeIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm !== '') {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then((r) => r.json())
        .then((response) => {
          setData(response);
        });
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <Header title="PokeApi App" />
      <article>
        <Search value={searchTerm} handleSearch={setSearchTerm}></Search>

        <p> Ad-hoc pokedex explorer select plus sign to see another</p>
        <div className="poke-list">
          <Pokemon details={data} />
        </div>
      </article>

      <Footer title="footer" />
    </div>
  );
}

export default App;
