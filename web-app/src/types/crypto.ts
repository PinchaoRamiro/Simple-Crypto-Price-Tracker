export interface Crypto {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: Float32Array | null;
  marketCapUsd: Float32Array | null;
  volumeUsd24Hr: string;
  priceUsd: number;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export interface CryptoApiResponse {
  data: Crypto[];
  timestamp: number;
}