# 👁️ CYBER-HACK TYCOON - JOURNAL D'EXPRESSION ET D'EXPORTATION 👁️

Ce document compile de manière exhaustive l'ensemble de notre session de développement pour **Cyber-Hack Tycoon v1.0.4**. Si vous reprenez ce projet sur un autre ordinateur ou avec un autre assistant IA, **donnez-lui simplement ce fichier à lire** ; il comprendra instantanément l'architecture du code, les mécaniques développées, et pourra reprendre le travail à 100% de ses capacités.

---

## 📋 1. Présentation du Projet
*   **Nom du jeu :** Cyber-Hack Tycoon
*   **Genre :** Clicker / Jeu incrémental narratif et stratégique.
*   **Thème :** Simulation d'un OS Hacker cinéma rétro-futuriste (CyberOS).
*   **Technologies :** HTML5, CSS3, JavaScript (ES6+ Vanilla).
*   **Architecture :** Scripts classiques séquentiels globaux (sans modules ES6 pour bypasser les limites CORS du protocole `file://` des navigateurs, permettant au jeu de tourner directement en double-cliquant sur `index.html`).
*   **Pseudo de l'auteur :** LoikH (Architect)
*   **Statut :** 100% stable, poli, traduisible à la volée, responsive mobile, et empaqueté en `.zip` pour Itch.io.

---

## 📂 2. Arborescence du Code Source

```
cyber_hack_tycoon/
├── index.html         # Structure HTML5 globale, squelettes des 8 fenêtres du bureau
├── styles.css         # Thème cyberpunk néon, effet CRT bombé, animations glitch et responsive
├── .gitignore         # Ignore les métadonnées et logs locaux
├── README.md          # Guide de lancement et de jeu complet en français
├── CONVERSATION_EXPORT.md # Ce journal d'exportation de session
└── js/
    ├── shop.js        # Config et formule exponentielle des malwares et pare-feu passifs
    ├── translations.js# Dictionnaire complet bilingue FR/EN (Static UI, boutique, emails)
    ├── gameState.js   # Modèle de données, calculs de taux et sauvegarde localStorage
    ├── uiManager.js   # Rendu DOM, Drag & Drop, fenêtres, barres, et flashs plein écran
    ├── storyData.js   # Arbre de dialogue des e-mails à choix multiples (FR/EN)
    ├── storyEngine.js # Moteur d'évaluation et de résolution des contrats narratifs
    └── main.js        # Chef d'orchestre, écouteurs d'événements, boucles et timers
```

---

## ⚙️ 3. Les Mécaniques Majeures Développées

### A. Le Compilateur Clavier Immérsif (Hacking Actif)
Cliquer sur "INJECTER LE CODE" compile des Lignes de Code (LoC). Pour une immersion totale, **le joueur peut taper sur n'importe quelle touche de son clavier physique** pour compiler du code ! Chaque touche pressée injecte une vraie ligne de commande simulée de hacker (nmap, meterpreter, ssh, etc.) dans la console.

### B. Le Confinement d'Urgence NetWatch (Lockdown)
Vos bots d'intrusion (DDoS, Trojans) émettent des traces réseau. Votre **niveau de menace** grimpe naturellement chaque seconde. S'il atteint son maximum (100% ou 120% après upgrade), NetWatch déclenche un **Lockdown** :
1.  La barre supérieure flashe en rouge et le statut passe en `LOCKDOWN`.
2.  La boutique et la rechange de code sont gelées d'urgence. Votre production passive par seconde est suspendue.
3.  Le terminal principal devient une console de purge rose clignotante : `EMERGENCY LOG PURGE [0/200]`.
4.  Le joueur doit **taper 200 touches au clavier** (ou cliquer) pour purger ses logs d'urgence, réinitialiser la menace à 0% et débloquer le système.

### C. Les Mini-Jeux de Brèches Actives (QTE Decryption)
Toutes les 45 à 75 secondes, une vulnérabilité réseau apparaît en tâche de fond sous la forme d'un bouton flottant cyan avec un éclair animé. Le joueur a 15 secondes pour cliquer dessus et lancer une brèche :
*   Un code hexadécimal cible s'affiche (ex: `0xDE8B`) au milieu d'une grille de 8 boutons brouillés. Le joueur a 15s pour cliquer sur la clé identique.
*   **Réussite :** Un flash plein écran vert émeraude radial s'active et une bannière géante **`ACCESS GRANTED`** glisse au centre de l'écran avec un bonus massif de Crédits (฿).
*   **Erreur :** L'écran flashe brièvement en rouge et le temps restant diminue de 3 secondes.
*   **Échec (Temps écoulé) :** Une jauge rouge intense s'active, une bannière géante **`ACCESS DENIED`** glisse au centre, et votre menace grimpe directement de **+15%**.

### D. La Divulgation Progressive (Progressive Onboarding)
Pour éviter de décourager le joueur par une surcharge de fenêtres au démarrage, les systèmes se débloquent par paliers narratifs et d'équipement :
1.  **Boot initial :** Seule la messagerie sécurisée (`Commlink`) et le guide d'intrusion d'accueil sont visibles.
2.  **Séquence de boot validée :** Révèle le compilateur active (`Terminal`) et la boutique du marché noir (`Black Market`) avec l'onglet *Vente* (Conversion épurée).
3.  **Premier DDoS Botnet acheté :** Déclenche le tutoriel de sécurité, active le calcul de la menace passive, ouvre la console draggable de nettoyage de logs **`clear_logs.sh`**, débloque l'onglet d'achat **`SÉCURITÉ & VPN`** (Proxy Rotators, Tor Bridges), et active le spawner de brèches d'intrusions de ports.
4.  **Première décision narrative complétée :** Déclenche le tutoriel de l'IA, révèle la console de gestion **`project_ghost.exe`**, débloque l'EXP de l'IA (nourrir l'IA de LoC pour débloquer des sorts actifs : Overclock LoC x2 pendant 20s, Blackout menace à 0%, Siphon de cash de ฿150.00 à ฿250.00) et ouvre la campagne de conquête des 5 serveurs boss mondiaux.

### E. Le Bilinguisme à la Volée (FR / EN Switcher)
Un bouton permanent **`[ FR ]` / `[ EN ]`** dans la barre d'état permet de commuter instantanément l'intégralité du jeu sans rechargement. Tout est traduit : les menus statiques, les descriptions d'upgrades, les modificateurs de conquête, les jauges de l'IA, les toasts de notifications et même **le contenu textuel des e-mails narratifs à choix multiples en cours de lecture** ! De plus, le jeu auto-détecte la langue du navigateur au premier démarrage.

### F. Crédits, Support et Réinitialisation
*   La mention permanente `ARCHITECT: LoikH` est intégrée en haut à gauche.
*   Un bouton permanent **`฿ SOUTIEN`** (ou `฿ SUPPORT`) doré redirige vers votre page de dons Itch.io.
*   Un bouton **`INFO`** ouvre la fenêtre draggable `readme.txt` de présentation.
*   Un bouton **`RÉINITIALISER LE SYSTÈME`** rouge dans INFO demande une double confirmation immersive traduite, purge le `localStorage` et recharge proprement la page pour repartir de zéro.
*   Un e-mail de remerciement immersif et d'appel aux dons de la part de `LoikH (Architect)` arrive en jeu dès que le joueur dépasse les ฿60.00.

---

## 🚀 4. Guide de Déploiement et Commandes Git

### A. Lancer localement sous Windows / WSL (Sans CORS)
Pour que les imports séquentiels se fassent sans conflit de politique de sécurité locale du navigateur, double-cliquez directement sur :
👉 `/home/a507762/projet/cyber_hack_tycoon/index.html`
*(Fonctionne de manière 100% portable et autonome dans Chrome, Firefox ou Edge).*

### B. Déployer sur GitHub Pages (Mise en ligne gratuite)
1.  Liez votre dépôt GitHub distant en SSH :
    `git remote add origin git@github.com:LoikH/NOM_DE_VOTRE_DEPOT.git`
2.  Poussez la branche `main` qui contient notre premier commit initial :
    `git push -u origin main`
3.  Allez dans les **Settings** de votre dépôt GitHub ➔ **Pages** ➔ sous *Branch* sélectionnez **`main`** et le dossier **`/(root)`** ➔ cliquez sur **Save**.
4.  Votre jeu sera en ligne à l'adresse : `https://LoikH.github.io/NOM_DE_VOTRE_DEPOT/`

### C. Déployer sur Itch.io (Pour la communauté)
Nous avons créé pour vous l'archive de distribution zippée prête à l'emploi :
📁 **`/home/a507762/projet/cyber-hack-tycoon.zip`**
1.  Créez un projet sur Itch.io et configurez le type de projet sur **`HTML - You play it in the browser`**.
2.  Téléversez ce fichier `.zip` dans la section Uploads.
3.  Cochez la case **`This file will be played in the browser`**.
4.  Activez les dons (Donation Pay-What-You-Want) dans les Seller Settings et liez votre compte PayPal/Stripe.
5.  Passez le projet en **Public** !

---

## 🎯 5. Notes pour le Prochain Assistant / Prochaines Étapes
Si vous souhaitez poursuivre le développement de ce jeu, voici des idées d'extensions fantastiques :
1.  **Ajouter du Son (Web Audio API) :** Un bruit de touches de clavier mécanique rétro satisfaisant à chaque frappe, un son d'alarme de cyber-police lors du Lockdown, et une musique d'ambiance Synthwave désactivable.
2.  **Plus de mini-jeux d'intrusions :** Varier les puzzles (ex: mini-jeu de mémoire de couleurs façon Simon, ou décryptage par force brute où l'on doit stopper des rouleaux qui défilent rapidement).
3.  **Succès de piratage (Achievements) :** Une fenêtre draggable `achievements.sh` listant des badges déblocables (ex: *« Tapez 10 000 touches au clavier »*, *« Atteindre le niveau maximum de G.H.O.S.T. sans jamais subir de Lockdown »*).

*Fichier de session clos et empaqueté. Prêt à être migré. Système d'exploitation sécurisé. Fin de transmission.*
