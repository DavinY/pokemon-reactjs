import React from 'react';
import ListAllPokemon from '../components/home/ListAllPokemon';
import ListPokemon from '../components/ListPokemon/ListPokemon';
import MainContent from '../components/MainContent/MainContent';
// import BadgeComponent from '../components/emotion/BadgeComponent';


const Home = () => {
    return (
        <>
            <MainContent />
            <ListPokemon />
            <ListAllPokemon />
        </>

    )
}

export default Home;