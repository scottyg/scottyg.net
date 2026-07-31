# scottyg.net

Built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

### Usage

Install dependencies:

```
npm install
```

Start the dev server at http://localhost:3000:

```
npm run dev
```

Other tasks:

```
npm run build      # production build
npm start          # serve the production build locally
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

### Deploying

Pushing to the default branch deploys to production via the Vercel Git
integration. No build configuration is needed — Vercel detects Next.js and
runs `next build`.
