"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pokeballIco = "/pokeball.svg";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="bg-red-500 p-4 rounded-lg border-white border-4 mb-4">
      <div className="flex items-center justify-center">
        <Image src={pokeballIco} alt="Pokeball" width={40} height={40} />
        <h1 className="text-white text-4xl font-bold">Pokédex</h1>
      </div>
      <div className="mt-4">
        <SearchBar
          value={searchTerm}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>
    </header>
  );
};

export default Header;
