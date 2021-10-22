import React, { useEffect, useState } from 'react'
import { getAllPokemons, getNextPoke } from '../../controller/PokemonController';
import { AllContainer, AppContainer, BtnLoadMore, PokemonContainer } from '../emotion/EmotionComponents';
import PokemonCard from '../PokemonCard';

// const PokemonThumb = ({ id, image, name, type, _callback }) => {
//     const style = type + " thumb-container";
//     return (
//         <div className={style}>
//             <div className="number"><small>#0{id}</small></div>
//             <img src={image} alt={name} />
//             <div className="detail-wrapper">
//                 <h3>{name}</h3>
//                 <small>Type: {type}</small>
//             </div>
//         </div>
//     )
// }

const ListAllPokemon = () => {
    const [allPokemons, setAllPokemons] = useState([])
    // const [nextPoke, set] = useState("")
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    useEffect(() => {
        getAllPokemons().then(result => {
            console.log(result)
            setAllPokemons(result.data)
            setLoadMore(result.next);
        })
    }, [])

    const getNextPokemon = () => {
        getNextPoke(loadMore).then(result => {
            setAllPokemons(currentList => currentList.concat(result.data))
            setLoadMore(result.next);
        })
    }
    return (
        <AppContainer column>
            <h1>Pokemon Evolution</h1>
            <PokemonContainer>
                <AllContainer>
                    {allPokemons.map((pokemonStats, index) =>
                        <PokemonCard
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.image}
                            name={pokemonStats.name}
                            type={pokemonStats.type}
                        />)}
                </AllContainer>
                <BtnLoadMore onClick={() => getNextPokemon()}>Load more</BtnLoadMore>
            </PokemonContainer>
        </AppContainer>
    )
}



export default ListAllPokemon;