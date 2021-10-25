import axios from 'axios';


export const getAllPokemons = async () => {
    const url = process.env.REACT_APP_API + "pokemon?limit=20"
    const pokedata = await axios.get(url)
    const resultPokemon =
    {
        next: pokedata.data.next,
        data: []
    }

    await Promise.all(pokedata.data.results.map(async data => {
        const detailPoke = await getDetailPokemons(data.name)
        const pokeDTO = {
            id: detailPoke.id,
            name: detailPoke.name,
            image: detailPoke.image,
            types: detailPoke.types
        }
        resultPokemon.data.push(pokeDTO)

    }))
    resultPokemon.data.sort((a, b) => a.id - b.id)
    return resultPokemon

}

export const getNextPoke = async (url) => {
    const pokedata = await axios.get(url)
    const resultPokemon =
    {
        next: pokedata.data.next,
        data: []
    }

    await Promise.all(pokedata.data.results.map(async data => {
        const detailPoke = await getDetailPokemons(data.name)
        const pokeDTO = {
            id: detailPoke.id,
            name: detailPoke.name,
            image: detailPoke.image,
            types: detailPoke.types
        }
        resultPokemon.data.push(pokeDTO)

    }))
    resultPokemon.data.sort((a, b) => a.id - b.id)
    return resultPokemon
}


export const getDetailPokemons = async (name) => {
    const url = process.env.REACT_APP_API + `pokemon/${name}`
    const result = await axios.get(url)

    const detailPokeDTO = {
        id: result.data.id,
        name: result.data.name,
        image: result.data.sprites.other['official-artwork'].front_default,
        types: result.data.types,
        stats: result.data.stats,
    }
    return detailPokeDTO
}