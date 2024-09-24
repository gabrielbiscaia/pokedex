import React from "react";
import Image from "next/image";
import typeColors from "../constants/typeColors";
import { PokemonDetails } from "../types/pokemon";
import Link from "next/link";
interface PokemonCardProps {
  pokemon: PokemonDetails;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const capitalizeFirstLetter = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const formatPokemonNumber = (id: number): string => {
    return id.toString().padStart(3, "0");
  };

  return (
    <Link href={`/pokemon/${pokemon.id}`} className="w-full">
      <div className="bg-white shadow-md rounded-xl relative border-2 border-slate-800 hover:border-2 hover:border-red-500">
        <span className="absolute top-2 right-2 text-black px-2 py-1 text-sm font-semibold">
          {formatPokemonNumber(pokemon.id)}
        </span>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto"
        />
        <div className="bg-slate-200 p-4 rounded-xl">
          <h2 className="text-xl text-center text-black">
            {capitalizeFirstLetter(pokemon.name)}
          </h2>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className={`text-sm rounded-full px-4 py-2 text-white ${typeColors[type.type.name] || "bg-gray-200 text-black"}`}
              >
                {capitalizeFirstLetter(type.type.name)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
