"use client";

import React, { useState, useEffect } from "react";
import {
  PokemonList as PokemonListType,
  PokemonDetails,
} from "../types/pokemon";
import { getPokemonDetails } from "../utils/api";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  initialPokemonList: PokemonListType;
}

export default function PokemonList({ initialPokemonList }: PokemonListProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        initialPokemonList.results.map(async (pokemon) =>
          getPokemonDetails(pokemon.name),
        ),
      );
      setPokemonDetails(details);
    };
    fetchPokemonDetails();
  }, [initialPokemonList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
      {pokemonDetails.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}
