import React, { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [pokeIndex, setpokeIndex] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then((r) => r.json())
      .then((response) => {
        setData([...data, response]);
      });
  }, [pokeIndex]);

  const increase = () => {
    setpokeIndex(pokeIndex + 1);
  };

  const decrease = () => {
    const newIndex = pokeIndex - 1;

    if (newIndex > 0) {
      setpokeIndex(newIndex);
    } else {
      setpokeIndex(1);
    }
  };

  return (
    <div className="App">
      <Header title="PokeApi App" />
      <article>
        <div>
          <button onClick={increase}>Up</button>
          <button onClick={decrease}> down</button>
        </div>
        <p> Ad-hoc pokedex explorer select plus sign to see another</p>
        <div className="poke-list">
          {data.map((item) => (
            <Pokemon details={item} key={item.name} />
          ))}
        </div>
      </article>

      <Footer title="footer" />
    </div>
  );
}

export default App;
