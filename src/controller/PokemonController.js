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
            image: detailPoke.sprites.other['official-artwork'].front_default,
            type: detailPoke.types[0].type.name
        }
        resultPokemon.data.push(pokeDTO)

    }))
    resultPokemon.data.sort((a, b) => a.id - b.id)
    return resultPokemon

}

export const getNextPoke = async (url) => {
    const pokedata = await axios.get(url)
    console.log(pokedata)
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
            image: detailPoke.sprites.other['official-artwork'].front_default,
            type: detailPoke.types[0].type.name
        }
        resultPokemon.data.push(pokeDTO)

    }))
    resultPokemon.data.sort((a, b) => a.id - b.id)
    return resultPokemon
}


export const getDetailPokemons = async (name) => {
    const url = process.env.REACT_APP_API + `pokemon/${name}`
    const result = await axios.get(url)
    return result.data
}