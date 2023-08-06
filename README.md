# Crypto-currency-app

## Table of Contents

- General info
- Setup
- Results
- Improvements

## General info

A crypto currency app, which fecthes data from an API and displays the latests crypto currencies. The table shows the crypto icon, price, volume traded in the last 24 hours and percentage change. The app uses Vue.js and TypeScript.

## Setup

First cd into the repository front-end and install dependencies, run the following in the terminal:

```bash
cd front-end
yarn install
```

Second, run the development server:

```bash
yarn dev
```

For the backend you have to navigate here https://coinmarketcap.com/ and create a developer account. The API key will be required for fetching data.
To start the server (backend). Insert your API key and run the following:

```bash
cd back-end
yarn install
yarn dev
```

Open [http://http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.

## Results

Crypto currency table will be rendered.

Desktop view

![Screenshot 2023-08-06 at 18 04 49](https://github.com/Rokas-Augunas-Eng/crypto-currency-app/assets/78915609/2f5c87b6-fe28-4dc0-9cbf-cbbe2847f006)

Mobile view

![Screen Shot 2023-08-06 at 21 25 24](https://github.com/Rokas-Augunas-Eng/crypto-currency-app/assets/78915609/0a401b38-4d2b-4393-8220-e9617dc78491)

## Improvements

- Create more agnostic components
- Better testing
- Better loading and error state management
