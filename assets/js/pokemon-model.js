
class Pokemon {
  number;
  name;
  type;
  types = [];
  photo;
  weight;
  height;
  hp;
  atk;
  def;
  satk;
  sdef;
  spd;
  abilities = [];

  constructor(rawPokemon){
    this.name = rawPokemon.name;
    this.number = rawPokemon.id;
    const types = rawPokemon.types.map(typeSlot => typeSlot.type.name);
    this.types = types;
    this.type = types[0];
    this.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rawPokemon.id}.png`;
    this.height = rawPokemon.height / 10;
    this.weight = rawPokemon.weight / 10;
    this.hp = rawPokemon.stats[0].base_stat;
    this.atk = rawPokemon.stats[1].base_stat;
    this.def = rawPokemon.stats[2].base_stat;
    this.satk = rawPokemon.stats[3].base_stat;
    this.sdef = rawPokemon.stats[4].base_stat;
    this.spd = rawPokemon.stats[5].base_stat;
    const abilitiesNames = rawPokemon.abilities.map(ability => ability.ability.name)
    for (let i = 0; i < abilitiesNames.length; i++) {
      const ability = abilitiesNames[i];
      if(i < 2){
        this.abilities.push(ability);
      }
    }
  }
}