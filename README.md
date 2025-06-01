# QzonMe Frontend

This is the frontend application for QzonMe, a quiz creation and sharing platform.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```
VITE_API_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deploying to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Environment Variables

Make sure to set these in your Vercel project settings:

- `VITE_API_URL`: URL of the backend API
