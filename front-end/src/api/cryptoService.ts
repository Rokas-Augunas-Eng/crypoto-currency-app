import type { Cryptocurrency } from '@/interfaces/interfaces';
import axios from 'axios';

export const fetchCryptocurrencies = async (
  page: number = 1
): Promise<Cryptocurrency[]> => {
  const limit: number = 20;
  try {
    const response = await axios.get<Cryptocurrency[]>(
      `http://localhost:8000/latest?limit=${limit}&start=${page}`
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cryptocurrencies.');
  }
};
