import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  const redColor = "#EF4444";
  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
      >
        <Search color={redColor} size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
