# 👁️ CYBER-HACK TYCOON 👁️

Bienvenue dans **Cyber-Hack Tycoon**, un jeu incrémental (clicker) narratif et immersif sur le thème du hacking de haut vol. Le jeu simule un système d'exploitation de hacker rétro-futuriste ("OS Hacker Cinéma") complet avec des fenêtres flottantes déplaçables, une boîte mail cryptée sécurisée, et une console de compilation de codes d'exploits.

## 🚀 Comment Lancer le Jeu ?

Puisque le jeu est entièrement écrit en **HTML, CSS et JavaScript modernes (ES6+ Vanilla)**, il n'y a **aucune installation nécessaire** !

Il suffit d'ouvrir le fichier `index.html` directement dans votre navigateur web préféré (Chrome, Firefox, Edge, Safari...) :

1. Naviguez dans le dossier `/home/a507762/projet/cyber_hack_tycoon/`
2. Double-cliquez sur `index.html` (ou faites un clic droit -> ouvrir avec votre navigateur).
3. Entrez dans la matrice.

## 🛠️ Caractéristiques du Jeu

1. **Design OS Hacker "Cinéma" :**
   - Effet d'écran cathodique bombé avec lignes de balayage CRT et scintillement.
   - Fenêtres de bureau flottantes déplaçables via Drag & Drop en JS pur.
   - Textes importants avec effets de distorsion visuelle `glitch` animés en CSS.
   - Schéma de couleurs cyberpunk néon (Vert émeraude, Bleu cyan et Rose magenta).

2. **Gameplay Incrémental Addictif (Clicker & Idle) :**
   - **Génération Active :** Cliquez sur le bouton "INJECT EXPLOIT CODE" ou tapez **sur n'importe quelle touche de votre clavier** pour compiler de nouvelles Lignes de Code (LoC) à toute vitesse.
   - **Génération Passive (Automatisation) :** Convertissez vos codes en crédits crypto sur le marché noir et achetez des outils d'auto-hack (Overclocking, Zombies IoT, Scanners de port, Trojans d'intranet, Rootkits IA).
   - **Bureau de change :** Vendez 50% ou 100% de vos LoC accumulées pour obtenir des Crédits.

3. **Histoire Interactive & Choix Multiples (Narratif) :**
   - Recevez des emails cryptés de personnages énigmatiques (Cipher, Apex Corp HR, BioSynthetix Sec, NetWatch) selon vos crédits ou votre niveau de menace.
   - Prenez des décisions morales et stratégiques qui impacteront vos ressources, débloqueront des technologies exclusives ou feront grimper votre niveau de menace informatique.
   - Multiples fins possibles (Le casse légendaire d'Apex Corp contre le chemin légal sécurisé du délateur).

4. **Persistance des Sauvegardes :**
   - Votre progression est automatiquement sauvegardée dans le `localStorage` de votre navigateur toutes les 10 secondes ainsi qu'à chaque décision narrative majeure.

## 📂 Structure du Code Source

```
cyber_hack_tycoon/
├── index.html       # Squelette de l'interface et structure des fenêtres
├── styles.css       # Effets CRT, animations Glitch et thèmes néon
└── js/
    ├── main.js      # Chef d'orchestre, écouteurs d'événements et boucles tickers
    ├── gameState.js # Modèle de données, calculs de taux et gestion des sauvegardes
    ├── uiManager.js # Rendu dynamique du DOM, Drag & Drop et notifications
    ├── shop.js      # Configuration et coûts exponentiels des améliorations
    └── storyData.js # Arbre d'événements narratifs, prérequis et embranchements de choix
```

*Préparez votre clavier, lancez les scripts d'intrusion, et faites tomber les megacorporations !*
