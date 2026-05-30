# Assistant AI Personnalisé 🤖✨

Bienvenue sur le projet de mon Assistant AI ! 

Il s'agit d'une application web conçue pour regrouper plusieurs outils d'intelligence artificielle au même endroit, avec une interface simple et facile à utiliser sur téléphone. Elle est pensée pour pouvoir être transformée en véritable application mobile grâce à PWABuilder.

## 🎯 Quel est le but de cette application ?

L'application agit comme un couteau suisse de l'intelligence artificielle. Elle propose trois fonctionnalités principales accessibles dès la page d'accueil :

* **💬 Chatbot Personnalisable :** Un assistant avec qui discuter. Il est possible de choisir sa personnalité, son rôle (comme rédiger des textes ou jouer un rôle) et d'utiliser des outils vocaux ou d'importer des documents.
* **🖼️ Générateur d'Images :** Un espace pour créer des images à partir de texte (prompts) avec l'assistance d'une AI pour guider la création. 
* **🎨 Générateur de Logos :** Un outil dédié à la création d'identités visuelles simples et rapides, avec la possibilité d'enregistrer les résultats directement dans la galerie du téléphone.

## ✨ Fonctionnalités spéciales

* **Filtre SFW / NSFW :** Un bouton de sécurité est présent en haut de l'écran. L'accès aux contenus non filtrés est protégé et nécessite une vérification d'âge stricte via Google.
* **Mode Hors-ligne :** Grâce à la technologie "Service Worker", l'interface de l'application peut s'ouvrir même si le téléphone n'a pas de connexion internet au moment de son lancement.
* **Thème Dynamique :** L'application adapte ses couleurs et s'affiche principalement en mode sombre pour le confort des yeux.

## 🚀 Comment ça marche ? (Pour PWABuilder)

Ce dossier contient la structure de base (la "coquille") de l'application :
1.  **`index.html`** : L'organisation des pages et des boutons.
2.  **`style.css`** : Les couleurs, les formes et l'habillage.
3.  **`app.js`** : L'animation des boutons (comme le filtre d'âge).
4.  **`manifest.json`** : La carte d'identité de l'application (nom, icônes).
5.  **`sw.js`** : Le moteur qui permet de garder l'application en mémoire pour le mode hors-ligne.

**Pour la transformer en application :**
Il suffit d'héberger ces fichiers sur "GitHub Pages" pour obtenir un lien web, puis de copier ce lien sur le site **PWABuilder.com** qui se chargera de créer les fichiers d'installation pour les téléphones.

---
*Note : Les connexions directes vers les intelligences artificielles (comme PixAI ou Spicychat) nécessiteront une configuration en arrière-plan via des automatisations pour lier les boutons de cette interface aux moteurs d'AI.*
