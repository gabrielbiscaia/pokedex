"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getPokemonDetails } from "../../../utils/api";
import { PokemonDetails } from "../../../types/pokemon";
import typeColors from "../../../constants/typeColors";
import PokemonSkeletonDetails from "../../../components/PokemonSkeletonDetails";

const PokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const data = await getPokemonDetails(id as string);
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  const capitalizeFirstLetter = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const navigateToPokemon = (direction: "prev" | "next") => {
    const currentId = pokemon?.id || parseInt(id as string);
    let newId = direction === "prev" ? currentId - 1 : currentId + 1;

    if (newId < 1) newId = 151;
    if (newId > 151) newId = 1;

    router.push(`/pokemon/${newId}`);
  };

  if (isLoading) {
    return <PokemonSkeletonDetails />;
  }

  if (!pokemon || pokemon.id > 151) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Pokemon not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div
          className={`p-4 ${typeColors[pokemon.types[0].type.name]} text-white flex justify-between items-center relative`}
        >
          <Link href="/" className="text-white hover:underline z-10">
            {"< Pokédex"}
          </Link>
          <div className="absolute left-0 right-0 flex justify-center items-center">
            <button
              onClick={() => navigateToPokemon("prev")}
              className="mr-2 text-2xl hover:text-slate-500"
            >
              {"<"}
            </button>
            <h1 className="text-2xl font-bold">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
            <button
              onClick={() => navigateToPokemon("next")}
              className="ml-2 text-2xl hover:text-slate-500"
            >
              {">"}
            </button>
          </div>
          <span className="z-10">
            #{pokemon.id.toString().padStart(3, "0")}
          </span>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center ">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <div className="flex gap-2 mb-4">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`px-3 py-1 rounded-full text-white text-sm ${typeColors[type.type.name]}`}
                  >
                    {capitalizeFirstLetter(type.type.name)}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-600">Weight</p>
                  <p className="font-semibold">{pokemon.weight / 10} kg</p>
                </div>
                <div>
                  <p className="text-gray-600">Height</p>
                  <p className="font-semibold">{pokemon.height / 10} m</p>
                </div>
                <div>
                  <p className="text-gray-600">Abilities</p>
                  <p className="font-semibold">
                    {pokemon.abilities
                      .map((ability) =>
                        capitalizeFirstLetter(ability.ability.name),
                      )
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="text-center text-xl font-semibold mb-4">
              Base Stats
            </h2>
            <div className="space-y-2">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="flex items-center px-4">
                  <span className="w-36 text-right mr-4">
                    {capitalizeFirstLetter(stat.stat.name)}
                  </span>
                  <div className="flex-grow bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${typeColors[pokemon.types[0].type.name]} h-full`}
                      style={{ width: `${(stat.base_stat / 200) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-4 w-10">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
