import { getPokemonList } from "../utils/api";
import PokemonList from "../components/PokemonList";
import Header from "@/components/Header";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <PokemonList initialPokemonList={pokemonList} />
    </main>
  );
}
