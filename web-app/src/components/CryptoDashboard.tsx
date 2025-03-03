"use client";

import React, { useState } from "react";
import useCryptoData from "../hooks/useCryptoData";
import useSearchData from "@/hooks/useSearchCrypto";
import SearchBar from "./SearchBar";
import CryptoList from "./CryptoList";

const CryptoDashboard: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const { data: cryptos, isLoading, isError, refetch, isFetching } = useCryptoData();
  const { cryptosSearch, loadingSearch, isError: isSearchError } = useSearchData(search);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-4 flex flex-col items-center">
      <h1 className="w-full max-w-4xl text-2xl md:text-4xl font-bold text-center text-red-500 mb-8">
        Crypto Price Tracker
      </h1>
      <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-3 justify-between items-center mb-4">
        <SearchBar search={search} setSearch={setSearch} />
        <button
          onClick={() => refetch()} 
          disabled={isFetching} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all flex items-center justify-center"
        >
          {isFetching ? (
            "Refreshing..."
          ) : (
            "Refresh"
          )}
        </button>
      </div>

      {(isError || isSearchError) && (
        <p className="text-red-500 text-center mt-4">
          Error fetching data. Please try again later.
        </p>
      )}

      <CryptoList
        cryptos={search ? cryptosSearch : cryptos || []} // use cryptosSearch if search is not empty
        loading={isLoading || loadingSearch} 
      />
    </div>
  );
};

export default CryptoDashboard;