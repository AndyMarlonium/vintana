# Vintana

Astrologie malgache : vintana du jour, calendrier, sikidy, rites, numérologie, portrait de naissance.
Application web installable, fonctionne hors connexion après la première ouverture.

## Publier

Déposez **le contenu de ce dossier** à la racine du dépôt, puis activez GitHub Pages
(Settings → Pages → branche `main`, dossier `/`).

Fichiers à publier :

- `index.html` : écran d'ouverture + application chiffrée (thèmes sombre et clair intégrés)
- `sw.js`, `manifest.webmanifest` : installation et hors-ligne
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` : icônes

L'adresse publique sera de la forme `https://<compte>.github.io/<depot>/`.

## Clé d'appareil

Chaque téléphone affiche un code appareil. La clé correspondante est générée par
`prive/Vintana Cle (generateur).html` à partir de ce code. Elle est retenue sur l'appareil.

## À ne jamais publier

- le générateur de clés ;
- le dossier `source/` (application en clair et script de construction).

## Reconstruire

Depuis `source/` : `python3 build.py` (nécessite le paquet Python `cryptography`).
Le dossier `dist/` est régénéré entièrement.

## Historique

- Build 17 : thème clair réparé ; portrait de naissance par personne (tempérament,
  carrière, argent, deux pierres de naissance, aliments de naissance, année personnelle).
- Build 16 : pierres et table du jour.
