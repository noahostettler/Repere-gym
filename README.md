# Repère — Musculation et nutrition

Application personnelle : programme Push/Pull/Legs/Upper/Lower, séries, repos, progression, poids corporel et journal alimentaire avec calcul des macros.

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

Modifier les fichiers du dépôt puis publier sur la même branche. Après un changement des ressources mises en cache, augmenter la version `v2-nutrition` du cache dans `sw.js` pour renouveler les fichiers hors connexion.

## Nutrition

L’onglet Nutrition comprend : journal par date et repas, calories/protéines/glucides/lipides, objectifs facultatifs, favoris, repas habituels, recherche Ciqual et recherche en ligne Open Food Facts par nom ou code-barres saisi. Le lecteur de code-barres par caméra n’est pas intégré.

La base Ciqual est incluse dans `ciqual.json` et est mise en cache avec l’application. La recherche des produits de marque nécessite Internet. Si le service externe est indisponible, utiliser les favoris, les aliments courants ou la saisie manuelle. Les recherches sont déclenchées par un bouton et espacées ; aucune recherche à chaque frappe.

Les valeurs manquantes restent inconnues : un produit incomplet doit être complété avec les valeurs de l’étiquette avant ajout. Pour les liquides, vérifier sur l’emballage si la base est 100 g ou 100 ml et utiliser « Modifier les valeurs » si nécessaire. Toujours choisir cru ou cuit en fonction de la quantité pesée.

La sauvegarde JSON de Programme contient maintenant aussi la nutrition. Les anciennes sauvegardes restent acceptées (nutrition vide). Les séances déjà enregistrées sur la même adresse GitHub sont conservées. Ne pas effacer les données du navigateur lors d’une mise à jour.

## Sources et licences

- **Anses-Ciqual 2025**, version publiée le 19 novembre 2025, Licence Ouverte / Open Licence 2.0 (Etalab). Source officielle : https://doi.org/10.57745/RDMHWY ; fichier `Table Ciqual 2025_FR_2025_11_03.xlsx` (identifiant officiel 666260). 3 484 aliments. Extraction des valeurs énergétiques réglementaires, protéines N × 6,25, glucides et lipides pour 100 g. Les noms ont été conservés avec normalisation des retours à la ligne ; les décimales ont été converties en nombres JSON et les valeurs manquantes en null. Les traces sont représentées à 0 et les valeurs inférieures à x à leur borne x, avec indicateur d’approximation. Les valeurs originales sont disponibles dans le fichier source officiel.
- **Open Food Facts**, https://world.openfoodfacts.org/, base sous Open Database License (ODbL 1.0) et contenus individuels sous Database Contents License. https://world.openfoodfacts.org/terms-of-use ; https://opendatacommons.org/licenses/odbl/1-0/ . Les réponses sont conservées sur l’appareil lors d’un ajout ou d’une mise en favori ; ces données restent attribuées à Open Food Facts. Aucun catalogue Open Food Facts n’est distribué dans cette archive. Aucune image produit n’est utilisée.

Les interfaces de recherche restent séparées et les fiches gardent leur origine. Les données alimentaires ne sont pas garanties exactes pour un produit donné : vérifier l’étiquette en cas de doute. Cette application et son extraction de données ne sont pas produites ou validées par l’Anses ou Open Food Facts.

## Mise à jour d’une V1 déjà sur GitHub

1. Exporter une sauvegarde depuis Programme.
2. Décompresser le ZIP de la nouvelle version et déposer tous ses fichiers à la racine du dépôt existant (Add file > Upload files). Remplacer les fichiers du même nom.
3. Enregistrer directement sur la branche main et attendre la fin du déploiement Pages.
4. Ouvrir le site, recharger, puis le fermer et le rouvrir si l’ancienne version était encore ouverte. Le cache hors connexion porte une nouvelle version pour remplacer les anciens fichiers.
5. Le nouvel onglet Nutrition apparaît. Les données locales restent sous la clé `repere.v1`.
