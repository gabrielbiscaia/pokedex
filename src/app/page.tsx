import { getPokemonList } from "../utils/api";
import PokemonList from "../components/PokemonList";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <main className="container mx-auto px-4 py-8">
      <PokemonList initialPokemonList={pokemonList} />
    </main>
  );
}
