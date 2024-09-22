import { getPokemonList } from "../utils/api";
import PokemonList from "../components/PokemonList";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Pokédex</h1>
      <PokemonList initialPokemonList={pokemonList} />
    </main>
  );
}
