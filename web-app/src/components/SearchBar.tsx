"use client";

import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or symbol..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full sm:w-96 p-2 text-lg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500"
    />
  );
};

export default SearchBar;