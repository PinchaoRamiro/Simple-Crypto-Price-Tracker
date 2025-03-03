"use client"; 
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Crypto, CryptoApiResponse } from '../types/crypto';

const fetchSearchData = async (searchTerm: string): Promise<Crypto[]> => {
  const response = await axios.get<CryptoApiResponse>(
    `https://api.coincap.io/v2/assets?search=${searchTerm}`
  );
  return response.data.data;
};

const useSearchCrypto = (query: string) => {
  const { data, isLoading, isError } = useQuery<Crypto[], Error>({
    queryKey: ['searchCryptos', query], 
    queryFn: () => fetchSearchData(query), 
    enabled: !!query, 
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false, 
  });

  return {
    cryptosSearch: data || [], 
    loadingSearch: isLoading, 
    isError, 
  };
};

export default useSearchCrypto;