# Ethereum DApp with Solidity and Next.js

This repository contains a decentralized application (DApp) built using Solidity for the smart contract and Next.js for the frontend. The DApp demonstrates a simple storage system where users can set, get, produce, and consume an amount stored on the Ethereum blockchain.

## Smart Contract

The smart contract (`Storage.sol`) is written in Solidity, a programming language specifically designed for creating smart contracts on the Ethereum blockchain. It includes the following functions:

- `set(uint _num)`: Sets the storage amount to the provided value and logs the received value.
- `get()`: Retrieves the current storage amount.
- `produce()`: Increments the storage amount by one.
- `consume()`: Decrements the storage amount by one.

## Frontend

The frontend of the DApp is built using Next.js, a React framework for building web applications. It communicates with the Ethereum blockchain using the `ethers.js` library to interact with the deployed smart contract. Users can input values, retrieve the current amount, and trigger the "produce" and "consume" actions from the user interface.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ethereum-dapp.git

## hardhat configuration

To run the local node run the following command

```shell
npx hardhat node
```

> note that this will create a different set of wallets every single time. So the wallet has to be configured before every use. to get around this use some other test nets

To run the test scripts run the following command

```shell
npx hardhat test
```

To run the deploy script in local node

```shell
npx hardhat run scripts/deploy.ts --network localhost
```

## frontend configuration

make sure to install the packages with `npm i` before running the frontend

> Edit the project id in page.tsx file you can get your project id from https://cloud.walletconnect.com/

To update the networks, go to `/frontend/src/app/page.tsx` and update the `chains` array

```shell
npm run dev
```

Open your browser and navigate to http://localhost:3000 to interact with the DApp.