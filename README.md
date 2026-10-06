# Repère — Carnet de musculation

Application personnelle de musculation : programme Push/Pull/Legs/Upper/Lower, séries, repos, double progression, historique et poids corporel.

## Publication sur GitHub Pages

1. Créer un dépôt GitHub public nommé `repere-musculation`.
2. Déposer les fichiers de cette archive directement à la racine du dépôt, avec `index.html` à côté de `README.md`. Ne pas déposer le ZIP ou le dossier contenant les fichiers.
3. Dans **Settings > Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
4. Attendre la réussite du déploiement dans **Actions**, puis ouvrir le lien donné dans **Settings > Pages**. Si GitHub fournit une adresse sans slash final, ouvrir la racine de l’application avec un slash final.

## Installation téléphone

- iPhone : ouvrir dans Safari, puis Partager > Sur l’écran d’accueil.
- Android : ouvrir dans Chrome, puis menu > Installer l’application ou Ajouter à l’écran d’accueil.

## Données personnelles

Le programme, les séances et le poids sont enregistrés dans le navigateur de chaque appareil. Il n’y a aucune synchronisation entre téléphones, aucune requête vers une IA et aucun envoi des séances à GitHub.

Avant de changer d’adresse ou de navigateur : utiliser **Programme > Exporter la sauvegarde** sur l’ancienne version, puis **Importer une sauvegarde** sur la nouvelle.

## Hors connexion

Le cache de l’application est prévu pour une utilisation hors connexion après une première ouverture réussie. Tester l’application avec le mode avion avant de compter sur cette fonction à la salle.

## Modifications futures

Modifier les fichiers du dépôt puis publier sur la même branche. Après un changement des ressources mises en cache, augmenter la version `v1` du cache dans `sw.js` pour renouveler les fichiers hors connexion.
