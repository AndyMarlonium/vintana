# Vintana

Astrologie malgache : vintana du jour, calendrier, sikidy, rites, numérologie.
Application web installable, fonctionne hors connexion après la première ouverture.

## Publier

Déposez **le contenu de ce dossier** à la racine du dépôt, puis activez GitHub Pages
(Settings → Pages → branche `main`, dossier `/`).

Fichiers à publier :

- `index.html` — écran d'ouverture
- `payload-v2.json` — application chiffrée (AES-256-GCM)
- `sw.js`, `manifest.webmanifest`, `icon.svg` — installation et hors-ligne

L'adresse publique sera de la forme `https://<compte>.github.io/<depot>/`.

## Deux verrous

1. **Code d'ouverture** — le même pour tous vos acheteurs. Il déchiffre l'application.
   Sans lui, `payload.js` est illisible : ce n'est pas du code masqué, c'est du chiffré.
2. **Clé d'appareil** — demandée à l'intérieur, propre à chaque téléphone.
   Générée par `prive/Vintana Cle (generateur).html`, à partir du code appareil que
   l'utilisateur vous envoie. Ce fichier s'ouvre seul dans un navigateur, sans réseau.

Le code d'ouverture actuel est `VINTANA-2026`. Pour le changer, demandez-moi de
reconstruire `payload.js` avec le nouveau code.

## À ne jamais publier

- `prive/Vintana Cle (generateur).html` — le générateur de clés
- `Vintana App.dc.html` et `Vintana App Clair.dc.html` — les sources en clair
- `support.js`

Ces fichiers restent chez vous. Qui les possède contourne les deux verrous.
