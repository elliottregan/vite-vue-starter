export async function fetchPokemon(id) {
  const url = new URL(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}