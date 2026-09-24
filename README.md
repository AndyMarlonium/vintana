# Vintana

Astrologie malgache : vintana du jour, calendrier, sikidy, rites, numérologie, portrait de naissance, orientation.
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

Chaque téléphone affiche un code appareil (ex. AB3-C4D). Le client vous l'envoie ; vous ouvrez
`source/prive/Vintana_Cle_generateur.html`, saisissez le code et renvoyez la clé (elle commence
par V2, environ 110 caractères) par WhatsApp ou SMS. Le client la colle dans l'application.

L'application ne contient qu'une clé publique : elle peut vérifier une clé, pas en fabriquer.
Sans clé valable, l'application chiffrée est illisible.

## À ne jamais publier

- le générateur de clés ;
- le dossier `source/` (application en clair et script de construction) ;
- surtout `source/secrets.json` et le générateur : qui les possède fabrique des clés.

**Sauvegardez `source/secrets.json` en lieu sûr.** S'il est perdu, plus aucune clé ne peut être
produite et tous les clients devront changer de clé.

## Reconstruire

Depuis `source/` : `python3 build.py` (nécessite le paquet Python `cryptography`).
Le dossier `dist/` est régénéré entièrement.

## Historique

- Build 23 : place de l'argent dans la maison selon la naissance ; bouton de partage retiré.
- Build 22 : mode Association dans la lecture à deux (rôles, caisse, décision, conseil, lunes d'affaires) ; dates propices personnelles par domaine, lunes et heures fortes, conseils.
- Build 21 : lecture de couple approfondie (directions, éléments, nombres, rapprochements, oppositions, meilleures lunes) ; vintana de l'enfant à naître (onglet Rites).
- Build 20 : clés signées (ECDSA) et application déchiffrable seulement avec une clé valable. Les anciennes clés ne fonctionnent plus.
- Build 19 : recherche du bon jour pour un projet (onglet Rites) ; partage du portrait en image.
- Build 18 : orientation de naissance (plan de la maison, place, direction favorable et à éviter).
- Build 17 : thème clair réparé ; portrait de naissance par personne (tempérament,
  carrière, argent, deux pierres de naissance, aliments de naissance, année personnelle).
- Build 16 : pierres et table du jour.
