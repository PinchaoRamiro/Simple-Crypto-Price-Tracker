import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Crypto } from '../types/crypto';

const fetchCryptos = async (): Promise<Crypto[]> => {
  const response = await axios.get<{ data: Crypto[] }>('https://api.coincap.io/v2/assets?limit=5');
  return response.data.data;
};

const useCryptoData = () => {
  return useQuery<Crypto[], Error>({
    queryKey: ['cryptos'], 
    queryFn: fetchCryptos, 
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true, 
  });
};

export default useCryptoData;