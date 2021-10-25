import React, { useState, useEffect, } from 'react';
import { HashRouter } from "react-router-dom"
// import MainNavbar from './components/commons/MainNavbar';
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from './config/MainRoutes';
import { PokemonContext } from "./context/PokemonContext";
import GlobalStyle from "./globalStyles";
import { getMyPokemon } from './Helpers/getMyPokemon';

//  Function for get Pokemon from localstorage

function App() {
  const [myPokemon, setMyPokemon] = useState(null);
  const [newEncounters, setNewEncounters] = useState(false);

  useEffect(() => {
    setMyPokemon(getMyPokemon())
  }, [newEncounters]);


  return (
    <PokemonContext.Provider value={{ myPokemon, newEncounters, setNewEncounters }}>
      <HashRouter>
        <GlobalStyle />
        <Navbar />
        <MainRoutes />
      </HashRouter>
    </PokemonContext.Provider>

  )

}
export default App;
