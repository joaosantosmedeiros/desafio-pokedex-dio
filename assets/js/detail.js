const id = window.location.search.split("=")[1];
const title = document.querySelector('.pokemon-name')
const body = document.querySelector('body')


const loadPokemon = async () => {
  const rawPokemon = await pokeApi.getPokemon(id)
  const pokemon = new Pokemon(rawPokemon);
  console.log(pokemon);
  body.classList.add(pokemon.type)
  body.innerHTML = `
  <header>
  <div class="main-nav">
    <a class="back-link" href="index.html">
      <i class="ph ph-arrow-left"></i>
    </a>
    <h1 class="pokemon-name">${pokemon.name}</h1>
  </div>
  <p>${pokemon.number < 100 ? (pokemon.number < 10 ? `#00${pokemon.number}`: `#0${pokemon.number}` ) : `#${pokemon.number}`}</p>
  </header>
  <section>
  <img class="pokemon-img" src="${pokemon.photo}" alt="${pokemon.name}">
  <div class="data">
    <ol class="types">
    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join("")}
    </ol>
    <div class="about">
      <p class="${pokemon.type}-color main">About</p>
      <div class="metric">
        <div class="weight">
          <div class="metric-container flex">
            <i class="ph ph-scales"></i>
            <p>${pokemon.weight}kg</p>
          </div>
          <p class="identifier">Weight</p>
        </div>
        <div class="height">
          <div class="metric-container flex">
            <i class="ph ph-ruler"></i>
            <p>${pokemon.height}m</p>
          </div>
          <p class="identifier">Height</p>
        </div>
        <div class="moves">
          <div class="metric-container">
            <div class="move">
              ${pokemon.abilities.map(ability => `<p>${ability}</p>`).join("")}
            </div>
          </div>
          <p class="identifier">Moves</p>
        </div>
      </div>
    </div>
    <div class="stats">
      <p class="${pokemon.type}-color main">Base Stats</p>
      <div class="stats-box">
        <div class="stat-column">
          <p class="${pokemon.type}-color">HP</p>
          <p class="${pokemon.type}-color">ATK</p>
          <p class="${pokemon.type}-color">DEF</p>
          <p class="${pokemon.type}-color">SATK</p>
          <p class="${pokemon.type}-color">SDEF</p>
          <p class="${pokemon.type}-color">SPD</p>
        </div>
        <div class="stat-column">
          <p>${pokemon.hp}</p>
          <p>${pokemon.atk}</p>
          <p>${pokemon.def}</p>
          <p>${pokemon.satk}</p>
          <p>${pokemon.sdef}</p>
          <p>${pokemon.spd}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `
}

loadPokemon();