"use client";

import React, { useState, useEffect } from "react";
import {
  PokemonList as PokemonListType,
  PokemonDetails,
} from "../types/pokemon";
import { getPokemonDetails } from "../utils/api";
import PokemonCard from "./PokemonCard";
import Header from "./Header";

interface PokemonListProps {
  initialPokemonList: PokemonListType;
}

export default function PokemonList({ initialPokemonList }: PokemonListProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        initialPokemonList.results.map(async (pokemon) =>
          getPokemonDetails(pokemon.name),
        ),
      );
      setPokemonDetails(details);
      setFilteredPokemon(details);
    };
    fetchPokemonDetails();
  }, [initialPokemonList]);

  useEffect(() => {
    const filtered = pokemonDetails.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemonDetails]);

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
