# Altura NFT - Test

A simple mobile app that allows users to input a twelve- word recovery seed, derive and store their private key, and view their ETH balance and address. The app is designed using React Native and TypeScript, and works on both iOS and Android devices.

## Getting Started

### `npm install`

Download and install all the required dependencies.

## Available Scripts

### `npm start`

Runs the app in development mode.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator.

## Ethereum RPC endpoints

- This project is set with a Public RPC endpoint's of Ethereum Mainnet. Don't hesitate to changed it to your own RPC HTTP provider in the file `/services/ethNetwork.ts`.
