# DineVerify - On-chain Restaurant Compliance

On-chain health & safety for restaurants, verifiable by all.

## Features

- ✅ Verifiable Task Execution with AI photo verification
- 📊 Automated Certification & Reporting
- 🏆 Social Recognition & Gamification
- 📚 Protocol Training & Mastery (On-chain)

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster Frame SDK for Mini App
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Base Mini App Integration

This app is designed to run as a Farcaster Mini App on Base network.

- Chain ID: 8453 (Base Mainnet)
- Testnet Chain ID: 84532 (Base Sepolia)
- Uses OnchainKit for wallet and identity
- Gasless transactions via Coinbase Paymaster

## License

MIT
