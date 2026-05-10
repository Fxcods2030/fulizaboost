# FulizaBoost - Vercel Deployment

## Files Included
- `index.html` - Frontend (NO credentials exposed)
- `api/pay.js` - Secure backend proxy (credentials hidden server-side)
- `vercel.json` - Vercel routing config
- `package.json` - Project metadata

## Deploy to Vercel (2 Methods)

### Method 1: Vercel CLI (Recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Navigate to project folder
cd fulizaboost-vercel

# 4. Deploy
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy

## How It Works
```
User Browser → Your Vercel API (/api/pay) → Megapay API
```
- API key and email are hidden on the server
- Frontend only sends phone + amount to your API
- Your API forwards to Megapay with credentials

## Credentials Confirmed
- API Key: `MGPYUXJqx4yT`
- Email: `elishakoskey36@gmail.com`
- Endpoint: `https://megapay.co.ke/backend/v1/initiatestk`

## Test Flow
1. Select limit → Click "Get Ksh X Now"
2. Enter ID + Phone → Continue
3. "Processing Payment" shows for 3 seconds
4. "Check Your Phone" opens with amount
5. User gets M-Pesa STK push on their phone
