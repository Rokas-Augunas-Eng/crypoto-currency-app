export interface Quote {
  USD: {
    price: number;
    volume_24h: number;
    percent_change_24h: number;
  };
}

export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  quote: Quote;
}
