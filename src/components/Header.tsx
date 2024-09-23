"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="bg-red-500 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Pokedex</h1>
        <button className="text-white">
          <Settings size={24} />
        </button>
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
