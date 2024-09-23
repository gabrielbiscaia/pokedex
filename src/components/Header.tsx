"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearchChange: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const pokeballIco = "/pokeball.svg";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchPokemon(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className="bg-white p-4 rounded-lg mb-4">
      <div className="flex items-center justify-center">
        <Image src={pokeballIco} alt="Pokeball" width={40} height={40} />
        <h1 className="text-red-500 text-4xl font-bold">Pokédex</h1>
      </div>
      <div className="mt-4">
        <SearchBar
          value={searchPokemon}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>
    </header>
  );
};

export default Header;
