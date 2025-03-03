"use client";

import React from "react";
import { Crypto } from "../types/crypto";

interface CryptoListProps {
  cryptos: Crypto[] | [];
  loading: boolean;
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptos, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-2 text-gray-400">Loading...</p>
      </div>
    );
  }
  

  if (cryptos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-400 text-lg">No results found.</p>
      </div>
    );
  }
  

  return (
    <ul className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cryptos.map((crypto) => {
        const priceUsd = crypto.priceUsd ? parseFloat(crypto.priceUsd.toString()) : 0;

        return (
          <li
            key={crypto.id}
            className="hover:bg-gray-700 transition-all border border-gray-700 p-4 bg-gray-800 rounded-lg shadow-md text-white"
          >
            <strong className="block text-lg">{crypto.name}</strong>
            <span className="text-sm text-gray-400">({crypto.symbol}): </span>
            <span className="text-green-400 font-semibold">${priceUsd.toFixed(2)}</span>
            <br />
            <a
              href={crypto.explorer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-all"
            >
              Explorer Link 🌐
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CryptoList;
