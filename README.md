# Portfolio — Andriakotoharison Kanto Fitahiana

Portfolio personnel réalisé avec **React** et **Vite**, inspiré d'un template Canva (palette adaptée au CV : bleu marine / bleu).

## Lancer en local

```bash
cd "Default Project/portfolio"
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Déploiement

Le dossier `dist/` généré par `npm run build` est prêt à être déployé sur Vercel, Netlify ou GitHub Pages.

## Personnaliser

- **Photo de profil** : remplacer le bloc avatar (initiales "KF") dans `src/components/Hero.jsx` par une balise `<img src="/photo.jpg" alt="..." />` et déposer la photo dans `public/`.
- **Données** : tout le contenu (compétences, projets, parcours…) est centralisé dans `src/data.js`.
- **Couleurs** : variables CSS dans `src/index.css` (`:root`).
- **CV** : fichier `public/cv.pdf`.
