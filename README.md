# Haaris Yahya – Portfolio Website

First iteration of my personal site, built with the Next.js App Router, Tailwind CSS v4, and a custom galaxy backdrop. Hosted on Vercel.

**Demo:** https://haarisy.dev



---

## ⚡️ Features

- **Galaxy-inspired background** with animated nebula, twinkling stars, and floating motion.
- **Rounded Quicksand typography** for a soft, friendly feel.
- **Hero navigation chips** for quick jumps to About, Experience, Projects, Contact, plus direct résumé access.
- **About section** replacing the skills grid, highlighting narrative, quick stats, and goals.
- **Experience timeline** with company logos and résumé/LinkedIn call-out.
- **Projects grid** featuring live demo and repo links, with a GitHub footer CTA.
- **Glassmorphism styling** and subtle hover interactions across cards and buttons.
- **Back-to-top control** for long scrolls.

---

## 🛠 Installation & Setup

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Visit `http://localhost:3000`.

---

## 🚀 Production

1. **Build**

   ```bash
   npm run build
   ```

2. **Start**

   ```bash
   npm start
   ```

   Or deploy directly with Vercel/Netlify/GitHub Actions.

---

## 📂 Project Structure

```
resume-site/
├─ public/               # Static assets (logos, project images, résumé PDF)
├─ src/
│  ├─ app/
│  │  ├─ components/     # Hero, About, Experience, Projects, etc.
│  │  ├─ layout.tsx      # Global layout & font setup
│  │  └─ page.tsx        # Page composition
│  └─ styles/globals.css # Tailwind v4 theme tokens & animations
├─ package.json
└─ README.md
```

---

## 🎨 Design Notes

| Token            | Value                               |
| ---------------- | ----------------------------------- |
| Primary          | `#4f46e5` (indigo 600)              |
| Accent           | `#ec4899` (pink 500)                |
| Background (dark)| Galaxy gradient w/ animated mesh    |
| Font             | Quicksand (Google Fonts)            |

---


## 📄 License

MIT

---

## 🙏 Credits

- Layout and README structure inspired by Brittany Chiang’s portfolio v4. [source](https://github.com/bchiang7/v4)

---

