const poke_container = document.getElementById('poke_container');
const pokemons_number = 50;
const colors = {

};

const main_types = Object.keys(colors);
console.log(main_type);

const fetchPokemons = async () => {
  for(let i=1; i<=pokemons_number; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = 'https://pokeapi.co/api/v2/pokemon/1${id}';
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const poke_type = pokemon.types.map(el => el.type.name);
  const type = main_type.find(type => poke_type.indexOf(type)>-1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokeInnerHTML = `
      <div class="img-container">
      <img src="https://pokeapi.co/api/v2/pokemon/1${pokemon.id}.png"/>
      </div>
      <div class="info">
          <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type:<span>${type}</span></small>
          </div>
  `;
  
  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);


}