interface Quote {
  price: number;
  volume_24h: number;
  percent_change_24h: number;
}

export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  quote: {
    USD: Quote;
  };
}

export interface ApiResponse {
  data: Cryptocurrency[];
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
  };
}
