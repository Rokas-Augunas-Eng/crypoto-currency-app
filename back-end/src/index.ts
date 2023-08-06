import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import axios from 'axios';
import cors from 'cors';
import { ApiResponse, Cryptocurrency } from './interfaces/interfaces';

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// Returns a paginated list of all active cryptocurrencies with latest market data.
app.get('/latest', async (req: Request, res: Response) => {
  let start = parseInt(req.query.start as string) || 1;
  let limit = parseInt(req.query.limit as string) || 20;

  try {
    const response = await axios.get<ApiResponse>(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY,
        },
      }
    );

    const data = response.data.data;

    const slugs = data.map((crypto: Cryptocurrency) => crypto.slug).join(',');
    const cryptoResponse = await axios.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slugs}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY,
        },
      }
    );

    const cryptoData = cryptoResponse.data.data;

    const latestDataWithLogo = data.map((cryptocurrency: Cryptocurrency) => ({
      ...cryptocurrency,
      logo: cryptoData[cryptocurrency.id]?.logo || null,
    }));

    res.json(latestDataWithLogo);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
