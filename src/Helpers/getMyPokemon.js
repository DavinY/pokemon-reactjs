export const getMyPokemon = () => {
    let myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
    if (myPokemon === null) myPokemon = [];
    return myPokemon;
}
