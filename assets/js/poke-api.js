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

pokeApi.getPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseBody => responseBody)
    .catch(console.log)
}

pokeApi.getEntry = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.flavor_text_entries.length > 0) {
        for (let i = 0; i < response.flavor_text_entries.length; i++) {
          let entry = response.flavor_text_entries[i];
          const entryVersion = entry.version.name;
          const entryLanguage = entry.language.name;
          if (entryLanguage == 'en' && ( entryVersion=='y' || entryVersion=='x' || entryVersion=='moon' || entryVersion=='sun' || entryVersion=='shield' || entryVersion=='sword'  || entryVersion=='scarlet' || entryVersion=='violet' || entryVersion=='legends-arceus')) {
    return entry.flavor_text;
  }
}
      }
return '';
    })
}