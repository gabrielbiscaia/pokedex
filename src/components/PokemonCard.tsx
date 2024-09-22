import React from "react";
import Image from "next/image";

import { PokemonDetails } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const capitalizeFirstLetter = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold text-center text-black">
        {capitalizeFirstLetter(pokemon.name)}
      </h2>
      <div className="flex justify-center mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="text-sm bg-gray-200 rounded-full px-4 py-2 mr-2"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
