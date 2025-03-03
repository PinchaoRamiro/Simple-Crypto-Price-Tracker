---
sidebar_position: 4
---

# State Management

The **Crypto Price Tracker** application uses **React Query** for state management. This section explains why React Query was chosen and how it is used in the project.

## Why React Query?

- **Automatic Caching**: React Query automatically caches API responses, reducing unnecessary network requests.
- **Background Updates**: Data is refreshed in the background to keep the UI up-to-date.
- **Error Handling**: React Query provides built-in error handling and retry mechanisms.
- **Control**: Allows control over the status of the coponents.

## Usage

I use the reac-query in the program, and envolve this whit this component.
This can be found in the route "src/app/Providers".
I do this because the react.query only works as a client server.
And this component is used in "src/app/page".
  ```javascript
    "use client"; 

    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import React from "react";

    const queryClient = new QueryClient();

    export default function Providers({ children }: { children: React.ReactNode }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    }

```
As example I aplicate in this hook: 

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


