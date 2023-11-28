
class Pokemon {
  number;
  name;
  type;
  types = [];
  photo;

  constructor(rawPokemon){
    this.name = rawPokemon.name;
    this.number = rawPokemon.id;
    const types = rawPokemon.types.map(typeSlot => typeSlot.type.name);
    this.types = types;
    this.type = types[0];
    this.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rawPokemon.id}.png`;
  }
}