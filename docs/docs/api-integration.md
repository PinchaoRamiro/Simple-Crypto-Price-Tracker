---
sidebar_position: 3
---

# API Integration

The **Crypto Price Tracker** application uses the **CoinCap API** to fetch live cryptocurrency prices.

## CryptoData Hook

In this example I use an API to obten the 5 cryptocurrencies.
```javascript
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
```
I also use the API to obten the results of the search

~~~javascript
  const response = await axios.get<CryptoApiResponse>(
    `https://api.coincap.io/v2/assets?search=${searchTerm}`
  );
~~~

