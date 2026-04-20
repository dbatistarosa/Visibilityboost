# 🎯 Dip Search — Lead Intelligence Tool

Find businesses with Google Business profiles and 20+ reviews but **no website** — filtered by any US state + city.

---

## Project Structure

```
dip-search/
├── api/
│   ├── cities.js          ← Serves US states + cities JSON
│   ├── places/
│   │   ├── search.js      ← Google Places Text Search (server-side)
│   │   └── details.js     ← Google Place Details (gets website field)
├── lib/
│   └── us-cities.js       ← All 50 states + major cities data
├── public/
│   └── index.html         ← Main frontend app
├── package.json
├── vercel.json
└── README.md
```

---

## Deploy to Vercel (5 minutes)

### Step 1 — Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Set your Google Places API Key as a secret
```bash
vercel secret add google_places_key AIzaSyBYIsH4SYtz4bUYIg1
```

### Step 3 — Deploy
```bash
cd dip-search
vercel --prod
```

That's it. Vercel gives you a live URL instantly.

---

## Restrict your API Key (IMPORTANT)

Go to: https://console.cloud.google.com/apis/credentials

1. Click your API key
2. Under "Application restrictions" → select **HTTP referrers (websites)**
3. Add your Vercel URL: `https://your-app.vercel.app/*`
4. Under "API restrictions" → restrict to: **Places API**
5. Save

This prevents anyone else from using your key.

---

## How It Works

1. **Select State** → all major cities appear as chips
2. **Select Cities** → pick one or many (or Select All)
3. **Choose Industries** → toggle any combination
4. **Set Parameters** → min reviews, max results per industry per city
5. **Run Search** → for each city × industry combo:
   - Geocodes the city (OpenStreetMap, free)
   - Calls `/api/places/search` → Vercel function → Google Places (no CORS)
   - Calls `/api/places/details` for each result to check for website
   - Only keeps businesses with NO website
6. **Export CSV** → ready for CRM or outreach

---

## Local Development

```bash
cd dip-search
npm install
vercel dev
```

Open: http://localhost:3000

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GOOGLE_PLACES_KEY` | Your Google Places API key |

Set locally:
```bash
echo "GOOGLE_PLACES_KEY=AIzaSyBYIsH4SYtz4bUYIg1" > .env.local
```
