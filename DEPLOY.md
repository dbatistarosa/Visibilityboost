# VisibilityBoost — Deploy to Vercel in 10 Minutes

## What you need
- A GitHub account (free) — github.com
- A Vercel account (free) — vercel.com
- The project files (this folder)
- Your domain: visibilityboost.com (buy at Namecheap ~$12/yr)

---

## STEP 1 — Install Node.js (if you don't have it)
1. Go to nodejs.org
2. Download the LTS version (green button)
3. Install it — just click Next, Next, Finish
4. Open Terminal (Mac) or Command Prompt (Windows)
5. Type: `node --version` — you should see a number like v20.x.x ✅

---

## STEP 2 — Test the site locally first
1. Open Terminal in this folder (visibilityboost/)
2. Run: `npm install`
3. Run: `npm run dev`
4. Open your browser to: http://localhost:3000
5. You should see your full website! ✅
6. Press Ctrl+C to stop when done

---

## STEP 3 — Push to GitHub
1. Go to github.com and create a free account (if you don't have one)
2. Click the "+" button → "New repository"
3. Name it: `visibilityboost`
4. Make it Private
5. Click "Create repository"
6. GitHub will show you commands — copy the ones that say "push an existing repository"

In Terminal, inside your visibilityboost/ folder:
```
git init
git add .
git commit -m "Initial commit — VisibilityBoost website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/visibilityboost.git
git push -u origin main
```

Replace YOURUSERNAME with your GitHub username ✅

---

## STEP 4 — Deploy on Vercel
1. Go to vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Add New Project"
4. Find "visibilityboost" in your repos → click "Import"
5. Vercel auto-detects Next.js — don't change any settings
6. Click "Deploy" 🚀

In about 60 seconds, Vercel gives you a free URL like:
`visibilityboost.vercel.app`

Your site is LIVE! ✅

---

## STEP 5 — Connect Your Custom Domain
1. Buy visibilityboost.com at namecheap.com (~$12/year)
2. In Vercel → your project → "Settings" → "Domains"
3. Type: visibilityboost.com → click "Add"
4. Vercel shows you DNS records to add
5. Go to Namecheap → "Manage Domain" → "Advanced DNS"
6. Add the records Vercel shows you (takes 5 min to copy-paste)
7. Wait 10–30 minutes for DNS to propagate
8. Your site is live at visibilityboost.com! 🎉

---

## STEP 6 — Update content (anytime)
1. Edit any file in /src/app/page.tsx
2. In Terminal: `git add . && git commit -m "Update content" && git push`
3. Vercel auto-deploys in ~30 seconds — no manual work needed

---

## Things to update before going live:
- [ ] Replace "hello@visibilityboost.com" with your real email throughout page.tsx
- [ ] Add your real phone number to the footer
- [ ] Update social media links (search for href="#" in the footer)
- [ ] Replace result card numbers with your real numbers once you have clients
- [ ] Connect a real form backend (Formspree.io — free, takes 5 min)
- [ ] Add Google Analytics (vercel.com/integrations has a one-click install)

---

## Connect real form submissions (Formspree — free)
1. Go to formspree.io → create free account
2. Create a new form → copy your form endpoint URL
3. In page.tsx, find the `handleSubmit` function
4. Replace the `setSubmitted(true)` with a real fetch call:

```javascript
async function handleSubmit() {
  // ... validation code stays the same ...
  
  const formData = {
    firstName: (document.getElementById('fname') as HTMLInputElement).value,
    lastName: (document.getElementById('lname') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value,
    business: (document.getElementById('business') as HTMLInputElement).value,
  }
  
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  setSubmitted(true)
}
```

---

## Cost to run this website: ~$0/month
- Vercel hosting: FREE (hobby plan covers this easily)
- Domain: ~$1/month ($12/year at Namecheap)
- Total: $1/month 🎉

---

## Need help? Common issues:

**"npm: command not found"** → Node.js isn't installed. Go back to Step 1.

**"Port 3000 already in use"** → Something else is running. Try: `npm run dev -- -p 3001`

**Build fails on Vercel** → Check the error log in Vercel dashboard. Usually a typo in the code. Copy the error and we'll fix it together.

**Domain not working after adding DNS** → DNS propagation takes up to 48 hours. Usually it's 10-30 minutes. Just wait.
