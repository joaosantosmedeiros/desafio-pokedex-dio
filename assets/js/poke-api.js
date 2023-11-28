const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(pokemon => new Pokemon(pokemon));
}

pokeApi.getPokemons = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseBody => responseBody.results)
    .then(pokemons => pokemons.map(pokeApi.getPokemonDetails))
    .then(detailRequests => Promise.all(detailRequests))
    .then(pokemonDetails => pokemonDetails)
}