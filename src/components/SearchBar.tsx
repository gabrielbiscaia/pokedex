import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for a Pokemon name..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-full border border-slate-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-red-500"
      >
        <Search color={"#000"} size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
