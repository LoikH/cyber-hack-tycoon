/* --- TRANSLATIONS DICTIONARY SYSTEM --- */

const TRANSLATIONS = {
    fr: {
        // Status Bar
        logo: "CYBER_OS v1.0.4",
        threatLabel: "NIVEAU DE MENACE :",
        locLabel: "LIGNES DE CODE :",
        creditsLabel: "CRÉDITS (฿) :",
        netRateLabel: "DÉBIT NET :",
        secure: "SÉCURISÉ",
        watched: "SURVEILLÉ",
        wanted: "RECHERCHÉ",
        critical: "CRITIQUE",
        lockdown: "CONFINEMENT",
        
        // About & Support Buttons
        supportBtn: "฿ SOUTIEN",
        aboutBtn: "INFO",
        aboutTitle: "~/about/readme.txt",
        aboutHeader: "CYBER-HACK TYCOON",
        aboutDesc: "Ce système est un logiciel libre et indépendant. Pensez à soutenir le créateur sur Itch.io pour financer le développement de nouveaux virus !",
        aboutDonateBtn: "SOUTENIR LOIKH SUR ITCH.IO",
        aboutResetBtn: "RÉINITIALISER LE SYSTÈME (WIPE)",
        confirmReset: "⚠️ ATTENTION : Cette action va effacer définitivement toutes vos Lignes de Code, vos Crédits, vos améliorations de boutique, vos niveaux d'IA G.H.O.S.T. et votre progression de conquête. Voulez-vous vraiment purger le système et redémarrer à zéro ?",
        
        // Terminal Window
        terminalTitle: "~/terminal/code_exploit.sh",
        terminalTitleLockdown: "~/terminal/purge_urgence_sys.sh",
        terminalInit1: "> INITIALISATION DE LA CONSOLE D'EXPLOIT...",
        terminalInit2: "> FIABILITÉ SYSTÈME : 100%",
        terminalInit3: "> PRÊT À INJECTER LES BLOCS DE CODE.",
        hackBtnNormal: "INJECTER LE CODE D'EXPLOIT",
        hackBtnLockdown: "PURGE D'URGENCE DES LOGS",
        terminalFooter: "Appuyez sur n'importe quelle touche ou cliquez pour compiler...",
        
        // Darknet/Shop tabs
        tabExploits: "EXPLOITS & SCRIPTS",
        tabSecurity: "SÉCURITÉ & VPN",
        tabConversion: "VENTE (LOC ➔ ฿)",
        
        // Conversion panel
        convTitle: "Bureau d'Échange de Données",
        convDesc: "Vendez vos lignes de code d'exploit accumulées sur le dark web pour obtenir des crypto crédits.",
        convRate: "Cours Actuel : <span class='text-cyan'>10 LoC</span> = <span class='text-magenta'>฿1.00</span>",
        sellAll: "VENDRE TOUT LOC",
        sellHalf: "VENDRE 50% LOC",
        
        // Commlink
        commlinkTitle: "~/secure_comm/messagerie.msg",
        commlinkHeader: "COMMUNICATIONS SÉCURISÉES",
        unread: "NON LUS",
        emptyInbox: "Aucun tunnel de cryptage actif trouvé.",
        emptyInboxSub: "Analyse des fréquences du deep web pour des handshakes...",
        
        // G.H.O.S.T. / Conquest
        ghostTitle: "~/secure_comm/project_ghost.exe",
        tabConquest: "CONQUÊTE MAINFRAME",
        tabGhost: "IA G.H.O.S.T.",
        conquestTitle: "Domination des Serveurs",
        conquestDesc: "Infiltrez les serveurs mondiaux pour prendre le contrôle des nœuds réseau et débloquer des modificateurs système permanents.",
        aiName: "Noyau G.H.O.S.T. v",
        aiExpLabel: "EXPÉRIENCE SYNAPTIQUE IA :",
        feedBtn: "NOURRIR DE 1 000 LOC (EXP +1 000)",
        skillsHeader: "POUVOIRS SYNAPTIQUES DÉBLOQUÉS :",
        
        // Tutorial Window (Onboarding)
        tutorialTitle: "MANUEL_SYSTEME: Tutoriel_Sequence_Boot.md",
        tutorialHeader: "👁️ MANUEL D'INTRUSION CYBER_OS 👁️",
        tutorialSub: "Bienvenue opérateur. Lisez les directives de sécurité avant d'accéder aux sous-réseaux globaux.",
        step1Title: "1. COMPILATION ACTIVE (FRAPPES CLAVIER) :",
        step1Desc: "Cliquez sur 'INJECTER CODE' ou pressez N'IMPORTE QUELLE TOUCHE de votre clavier pour compiler des Lignes de Code (LoC) à toute vitesse.",
        step2Title: "2. MARCHÉ NOIR (AUTOMATISATION) :",
        step2Desc: "Allez dans la boutique. Convertissez votre code LoC en Crédits (฿) dans l'onglet 'VENTE' pour acheter des bots et logiciels offensifs.",
        step3Title: "3. EXPOSITION & LOGS (SÉCURITÉ) :",
        step3Desc: "Vos matériels offensifs augmentent votre niveau de menace. Gardez un profil bas ou purgez vos logs sous peine d'être bloqué par NetWatch !",
        step4Title: "4. BRÈCHES DE DÉCRYPTAGE :",
        step4Desc: "Plus tard, des failles apparaîtront ! Résolvez les puzzles sous 15 secondes pour obtenir de généreux virements de crédits.",
        step5Title: "5. OBJECTIFS ULTIMES (FIN DE PARTIE) :",
        step5Desc: "Débloquez l'IA G.H.O.S.T. et hackez les 5 serveurs mondiaux pour bend les limites du système et conquérir le réseau global !",
        bootBtn: "INITIALISER LA SÉQUENCE DE BOOT / ENTRER DANS LA MATRICE",
        
        // Tutorial Window (Security Unlock)
        secTutorialTitle: "MANUEL_SYSTEME: Securite_VPN.md",
        secTutorialHeader: "⚠️ EXPOSITION TRACÉE ⚠️",
        secTutorialSub: "NetWatch a intercepté la signature DNS de vos DDoS Botnets zombies !",
        secStep1Title: "1. ALERTE EXPANSION :",
        secStep1Desc: "Posséder des bots d'intrusion génère de l'exposition. Votre jauge de menace va désormais grimper naturellement chaque seconde.",
        secStep2Title: "2. RISQUE DE CONFINEMENT (LOCKDOWN) :",
        secStep2Desc: "Si votre jauge de menace atteint 100%, NetWatch bloque le système ! Vos bots sont gelés et la boutique est fermée d'urgence.",
        secStep3Title: "3. NETTOYEUR DE LOGS ACTIF :",
        secStep3Desc: "Utilisez la nouvelle fenêtre draggable 'clear_logs.sh' (cliquez ou tapez activement dedans) pour purger manuellement vos traces (-0.8% par frappe).",
        secStep4Title: "4. BLINDAGE SÉCURITÉ PASSIF :",
        secStep4Desc: "Achetez des Proxy Rotators et des Tor Bridges dans le nouvel onglet 'SÉCURITÉ & VPN' de la boutique pour baisser passivement la menace.",
        secStep5Title: "5. CONTOURNEMENT DE PORTS :",
        secStep5Desc: "Les alertes réseau actives sont désormais activées ! Cliquez sur l'éclair cyan dès qu'il apparaît pour injecter vos malwares sous 15s.",
        secBootBtn: "ACTIVER LES CONTRE-MESURES DE SÉCURITÉ / PURGER LA CONSOLE",
        
        // Tutorial Window (G.H.O.S.T. Unlock)
        ghostTutorialTitle: "MANUEL_SYSTEME: GHOST_AI_Core.md",
        ghostTutorialHeader: "👾 PROJET G.H.O.S.T. INITIÉ 👾",
        ghostTutorialSub: "L'intelligence artificielle évolutive et la campagne de domination sont en ligne.",
        ghostStep1Title: "1. EXPÉRIENCE SYNAPTIQUE :",
        ghostStep1Desc: "Cliquez sur 'NOURRIR' dans l'onglet G.H.O.S.T. pour sacrifier 1 000 LoC de code et faire grimper l'EXP de l'IA.",
        ghostStep2Title: "2. POUVOIRS ACTIFS DÉBLOQUÉS :",
        ghostStep2Desc: "Faire grimper le niveau de l'IA débloque de redoutables compétences actives (LoC x2 temporaire, effacement de menace à 0%, siphon de crédits).",
        ghostStep3Title: "3. DOMINATION DES SERVEURS :",
        ghostStep3Desc: "Infiltrez les 5 mainframes mondiaux (District Bank, Police Data...) lorsque vos bots atteignent les seuils requis.",
        ghostStep4Title: "4. EFFETS PERMANENTS :",
        ghostStep4Desc: "Chaque serveur piraté et contrôlé vous offre des modificateurs permanents (+15% crédits, -20% coûts VPN, jauge de menace à 120%).",
        ghostStep5Title: "5. L'ENDGAME ULTIME :",
        ghostStep5Desc: "Infiltrez le 5ème serveur (Supercalculateur d'Apex) pour faire chuter les mégacorporations et asseoir votre suprématie sur le globe !",
        ghostBootBtn: "INTÉGRER LA CONFIGURATION DE L'IA / CONQUÉRIR LE CODESPACE",

        // Cleaner Window
        cleanerTitle: "~/terminal/clear_logs.sh",
        cleanerExposure: "VECTEUR D'EXPOSITION DE TRACE :",
        cleanerPassive: "Blindage VPN passif : ",
        cleanerInit1: "> CONSOLE DE SÉCURITÉ EN ATTENTE.",
        cleanerInit2: "> PRÊT À ÉCRASER LES VECTEURS D'INTRUSION.",
        cleanerScrubBtn: "EFFACER LES TRACES SENSITIVES",
        
        // Mini-Game alert widget
        vulnAlertText: "PORT VULNÉRABLE : INITIATE EXPLOIT",
        
        // Decryption Intrusion Window
        intrusionTitle: "~/darknet/bypass_injector.sh",
        intrusionHeader: "⚠️ VECTEUR SÉCURISÉ LOCALISÉ ⚠️",
        intrusionSub: "FAITES CORRESPONDRE LES CODES POUR DÉCRYPTER :",
        intrusionFooter: "Temps restant : ",
        
        // Notifications & Banners
        accessGranted: "ACCÈS AUTORISÉ",
        accessDenied: "ACCÈS REFUSÉ",
        intrusionSuccessNotif: "Décryptage réussi !",
        intrusionFailNotif: "Le pare-feu a détecté l'intrusion !",
        intrusionPenaltyNotif: "Secteur corrompu ! Pénalité de -3s.",
        lockdownAlertTitle: "ALERTE CONFINEMENT",
        lockdownAlertMsg1: "Les traceurs NetWatch ont localisé votre réseau !",
        lockdownAlertMsg2: "Effacez les traces dans le terminal pour dévier la cyber-police !",
        sysClearedTitle: "TRACE EFFACÉE",
        sysClearedMsg: "Effacement des logs terminé. Profil sécurisé restauré.",
        
        // Dynamic Upgrades Data
        upgrades: {
            overclock: { name: "CPU Overclocking", desc: "Overclocke votre processeur pour compiler plus vite.", benefit: "+0.1 LoC par clic" },
            ddos_bot: { name: "DDoS Botnet Zombie", desc: "Un appareil IoT infecté ciblant des serveurs.", benefit: "+1.0 LoC/s" },
            port_scanner: { name: "Subnet Port Scanner", desc: "Scanne automatiquement les réseaux à la recherche de failles.", benefit: "+5.0 LoC/s" },
            trojan: { name: "Remote Access Trojan", desc: "Déploie un accès silencieux dans l'intranet d'une entreprise.", benefit: "+25.0 LoC/s" },
            rootkit: { name: "Rootkit IA Ring-0", desc: "IA auto-évolutive prenant les privilèges admin système.", benefit: "+150.0 LoC/s" },
            
            // Security Upgrades
            proxy_rotator: { name: "Rotateur de Proxy Node", desc: "Fait tourner vos adresses IP d'accès en tâche de fond.", benefit: "-0.05% menace/s" },
            decoy_gateway: { name: "Tunnel de Gateway Leurre", desc: "Redirige les traces vers de faux serveurs honey-pots.", benefit: "-0.20% menace/s" },
            tor_bridge: { name: "Pont d'Oignon Tor Chiffré", desc: "Établit un tunnel de routage chiffré de grade militaire.", benefit: "-1.00% menace/s" }
        },
        
        // Conquest nodes
        conquest: {
            bank: { name: "District Central Bank", desc: "Infiltrez et redirigez les en-têtes de transactions bancaires.", req: "Requiert : 20 DDoS Bots", reward: "Récompense: Taux de conversion LoC ➔ ฿ augmenté de +15%" },
            police: { name: "Cluster de Données Cyber-Police", desc: "Corrompez les bases de NetWatch pour retarder les interventions.", req: "Requiert : 15 Port Scanners", reward: "Récompense: Jauge de sécurité étendue (Menace maximum fixée à 120%)" },
            satellite: { name: "Satellite ComSat-9 NetWatch", desc: "Interceptez les faisceaux orbitaux pour bloquer le traçage.", req: "Requiert : 8 Trojans", reward: "Récompense: Toutes les défenses VPN de la boutique coûtent 20% de moins" },
            military: { name: "Réseau Militaire Ring-0 Apex", desc: "Infiltrez les serveurs de calcul tactiques pour booster le codage.", req: "Requiert : 3 AI Rootkits", reward: "Récompense: Compilateur actif optimisé (+1 LoC par clic/touche)" },
            supercomputer: { name: "Supercalculateur Apex Central", desc: "La cible ultime. Surchargez leurs serveurs principaux.", req: "Requiert : Sacrifier 45 000 LoC directement dans leur tampon", reward: "Récompense: Victoire de Campagne de Domination Digitale Totale !" }
        },
        
        // AI Levels
        ai: {
            l1: { name: "Noyau Embryonnaire", skillName: "Noyau Inactif", skillDesc: "Le noyau de l'IA sommeille. Nourrissez-le de code pour l'éveiller." },
            l2: { name: "IA Scripte Synaptique", skillName: "Booster Overclock", skillDesc: "Double la puissance de compilation active (LoC x2) pendant 20s. [Recharge: 90s]" },
            l3: { name: "IA Sentinelle Système", skillName: "Protocole Blackout", skillDesc: "Coupe les connexions. Évapore instantanément la menace à 0%. [Recharge: 180s]" },
            l4: { name: "IA Demi-Dieu Numérique", skillName: "Siphon Bot", skillDesc: "Siphonne des comptes offshore (Gagne instantanément de ฿150.0 à ฿250.0). [Recharge: 300s]" }
        }
    },
    en: {
        // Status Bar
        logo: "CYBER_OS v1.0.4",
        threatLabel: "THREAT LEVEL :",
        locLabel: "LINES OF CODE :",
        creditsLabel: "CREDITS (฿) :",
        netRateLabel: "NET RATE :",
        secure: "SECURE",
        watched: "WATCHED",
        wanted: "WANTED",
        critical: "CRITICAL",
        lockdown: "LOCKDOWN",
        
        // About & Support Buttons
        supportBtn: "฿ SUPPORT",
        aboutBtn: "INFO",
        aboutTitle: "~/about/readme.txt",
        aboutHeader: "CYBER-HACK TYCOON",
        aboutDesc: "This system is free, independent software. Please consider supporting the creator on Itch.io to fund next-gen cybersecurity subnets.",
        aboutDonateBtn: "SUPPORT LOIKH ON ITCH.IO",
        aboutResetBtn: "WIPE SYSTEM DATA (RESET)",
        confirmReset: "⚠️ WARNING: This action will permanently delete all your Lines of Code, Credits, shop upgrades, G.H.O.S.T. AI levels, and conquest progress. Do you really want to purge the system and reboot from scratch?",
        
        // Terminal Window
        terminalTitle: "~/terminal/main_exploit.sh",
        terminalTitleLockdown: "~/terminal/sys_emergency_purge.sh",
        terminalInit1: "> INITIALIZING EXPLOIT CONSOLE...",
        terminalInit2: "> SYSTEM READINESS: 100%",
        terminalInit3: "> READY TO INJECT CODE BLOCKS.",
        hackBtnNormal: "INJECT EXPLOIT CODE",
        hackBtnLockdown: "EMERGENCY LOG PURGE",
        terminalFooter: "Press any key or click button to compile...",
        
        // Darknet/Shop tabs
        tabExploits: "EXPLOITS & SCRIPTS",
        tabSecurity: "SECURITY & VPN",
        tabConversion: "SELL (LOC ➔ ฿)",
        
        // Conversion panel
        convTitle: "Data Exchange Bureau",
        convDesc: "Sell gathered exploit lines of code on the dark web exchange market for crypto credits.",
        convRate: "Current Rate: <span class='text-cyan'>10 LoC</span> = <span class='text-magenta'>฿1.00</span>",
        sellAll: "SELL ALL LOC",
        sellHalf: "SELL 50% LOC",
        
        // Commlink
        commlinkTitle: "~/secure_comm/commlink.msg",
        commlinkHeader: "SECURE COMMUNICATIONS",
        unread: "UNREAD",
        emptyInbox: "No active encryption tunnels found.",
        emptyInboxSub: "Scanning deep web bands for incoming handshakes...",
        
        // G.H.O.S.T. / Conquest
        ghostTitle: "~/secure_comm/project_ghost.exe",
        tabConquest: "MAINFRAME CONQUEST",
        tabGhost: "G.H.O.S.T. AI",
        conquestTitle: "Mainframe Domination",
        conquestDesc: "Infiltrate secure servers to seize controlled nodes and unlock permanent global system modifiers.",
        aiName: "G.H.O.S.T. Core v",
        aiExpLabel: "AI SYNAPTIC EXPERIENCE:",
        feedBtn: "FEED 1,000 LOC TO CORE (EXP +1,000)",
        skillsHeader: "UNLOCKED SYNAPTIC POWERS:",
        
        // Tutorial Window (Onboarding)
        tutorialTitle: "SYSTEM_MANUAL: Boot_Sequence_Tutorial.md",
        tutorialHeader: "👁️ CYBER_OS INTRUDER MANUAL 👁️",
        tutorialSub: "Welcome operator. Read security directives before accessing global subnets.",
        step1Title: "1. ACTIVE COMPILING (GENERATION ACTIVE) :",
        step1Desc: "Click 'INJECT EXPLOIT CODE' inside the Terminal Window, or PRESS ANY KEY ON YOUR KEYBOARD to compile exploit Lines of Code (LoC) at lightning speeds.",
        step2Title: "2. DARKNET BLACK MARKET (AUTOMATION) :",
        step2Desc: "Go to the Black Market shop. Convert your LoC code into crypto Credits (฿) in the conversion tab, then purchase bots and trojans to generate code automatically.",
        step3Title: "3. EXPOSURE & LOG SCRUBBING (SECURITY) :",
        step3Desc: "Active bots leak traces and creep up your Threat Level. Manage exposure closely or NetWatch will trace and capture your server gateways!",
        step4Title: "4. BYPASS PORT INTRUSIONS :",
        step4Desc: "Active vulnerabilities will spawn in the future! Solve the hex matching puzzles under 15 seconds to gain massive credit payouts.",
        step5Title: "5. ULTIMATE OBJECTIVES (ENDGAME) :",
        step5Desc: "Unlock G.H.O.S.T. AI, feed it code to unlock active powers, and hack the 5 global servers to permanently bend system limits and win!",
        bootBtn: "INITIALIZE BOOT SEQUENCE / ENTER MATRIX",
        
        // Tutorial Window (Security Unlock)
        secTutorialTitle: "SYSTEM_MANUAL: Security_VPN.md",
        secTutorialHeader: "⚠️ EXPOSURE TRACED ⚠️",
        secTutorialSub: "NetWatch has intercepted your zombie DDoS Botnet network dns signatures!",
        secStep1Title: "1. EXPOSURE CREEP :",
        secStep1Desc: "Possessing offensive bot networks leaks tracking metadata. Your Threat Level jauge will now creep up naturally every second.",
        secStep2Title: "2. SYSTEM LOCKDOWN THREAT :",
        secStep2Desc: "If threat hits 100%, NetWatch triggers a lockdown! Server gateways are seized, active bots are frozen, and darknet shop transactions are blocked.",
        secStep3Title: "3. ACTIVE LOGS CLEANER :",
        secStep3Desc: "Use the new draggable 'clear_logs.sh' window (click or type inside it) to manually purge tracking logs (-0.8% trace per keystroke).",
        secStep4Title: "4. PASSIVE VPN SHIELDING :",
        secStep4Desc: "Purchase Proxy Node Rotators and Tor Bridges in the new 'SECURITY & VPN' shop tab to passively deflect traces and lower threat.",
        secStep5Title: "5. ACTIVE PORT BYPASSES :",
        secStep5Desc: "Port alerts are now online! Click the cyan flash lightning widget as soon as it appears to decrypt server vectors under 15 seconds.",
        secBootBtn: "ACTIVATE SECURITY COUNTER-MEASURES / PURGE CONSOLE",
        
        // Tutorial Window (G.H.O.S.T. Unlock)
        ghostTutorialTitle: "SYSTEM_MANUAL: GHOST_AI_Core.md",
        ghostTutorialHeader: "👾 PROJECT G.H.O.S.T. INITIALIZED 👾",
        ghostTutorialSub: "The evolutionary artificial intelligence core and mainframe campaign dashboard are online.",
        ghostStep1Title: "1. SYNAPTIC EXPERIENCE :",
        ghostStep1Desc: "Click 'FEED' inside the G.H.O.S.T. tab to sacrifice 1,000 LoC to expand G.H.O.S.T. AI experience and level up core synapses.",
        ghostStep2Title: "2. ACTIVE SYNAPTIC POWERS :",
        ghostStep2Desc: "Leveling up unlocks surpuissants active skills with cooldown timers (compiling multipliers, trace resets, international bank siphons).",
        ghostStep3Title: "3. MAINFRAME DOMINATION :",
        ghostStep3Desc: "Hack 5 secure global servers (Central Bank, Police Server...) once your active offensive bots hit the required infrastructure thresholds.",
        ghostStep4Title: "4. GLOBAL REWARDS :",
        ghostStep4Desc: "Each controlled server node provides permanent global system buffs (credits multipliers, VPN discounts, threat exposure cushions).",
        ghostStep5Title: "5. THE ENDGAME MAIN :",
        ghostStep5Desc: "Launch attack on the 5th server (Apex Central Supercomputer) to crash the corporate overlords and conquer the global codespace!",
        ghostBootBtn: "INTEGRATE AI SYNAPSE PROTOCOLS / SEIZE GLOBAL GRID",

        // Cleaner Window
        cleanerTitle: "~/terminal/clear_logs.sh",
        cleanerExposure: "TRACE EXPOSURE VECTOR:",
        cleanerPassive: "Passive VPN shielding: ",
        cleanerInit1: "> SECURITY CONSOLE IDLE.",
        cleanerInit2: "> READY TO OVERRIDE INTRUSION PATHS.",
        cleanerScrubBtn: "SCRUB SENSITIVE LOGS",
        
        // Mini-Game alert widget
        vulnAlertText: "PORT VULNERABLE : INITIATE EXPLOIT",
        
        // Decryption Intrusion Window
        intrusionTitle: "~/darknet/bypass_injector.sh",
        intrusionHeader: "⚠️ SECURE VECTOR LOCATED ⚠️",
        intrusionSub: "MATCH CODES TO DECRYPT PORT ROUTE :",
        intrusionFooter: "Time remaining: ",
        
        // Notifications & Banners
        accessGranted: "ACCESS GRANTED",
        accessDenied: "ACCESS DENIED",
        intrusionSuccessNotif: "Decryption cracked!",
        intrusionFailNotif: "Firewall traceback logged!",
        intrusionPenaltyNotif: "Sector mismatch! -3s penalty.",
        lockdownAlertTitle: "CRITICAL SEIZURE",
        lockdownAlertMsg1: "NetWatch tracers have located your server grid!",
        lockdownAlertMsg2: "Scrub logs in the terminal to evaporate trace routes!",
        sysClearedTitle: "SYS_CLEARED",
        sysClearedMsg: "Emergency log scrub COMPLETE. Safe state restored.",
        
        // Dynamic Upgrades Data
        upgrades: {
            overclock: { name: "CPU Overclocking", desc: "Overclocks your central processor to compile code faster.", benefit: "+0.1 LoC per click" },
            ddos_bot: { name: "DDoS Botnet Zombie", desc: "A compromised IoT device pinging targets continuously.", benefit: "+1.0 LoC/s" },
            port_scanner: { name: "Subnet Port Scanner", desc: "Automated scanner probing external networks for vulnerabilities.", benefit: "+5.0 LoC/s" },
            trojan: { name: "Remote Access Trojan", desc: "Silent backdoor deployed inside corporate intranet networks.", benefit: "+25.0 LoC/s" },
            rootkit: { name: "AI-Powered Kernel Rootkit", desc: "Advanced self-learning AI module taking ring-0 OS privileges.", benefit: "+150.0 LoC/s" },
            
            // Security Upgrades
            proxy_rotator: { name: "Proxy Node Rotator", desc: "Rotates your external routing hops dynamically.", benefit: "-0.05% threat/s" },
            decoy_gateway: { name: "Decoy Gateway Tunnel", desc: "Funnels telemetry traces through fake network honey-pots.", benefit: "-0.20% threat/s" },
            tor_bridge: { name: "Encrypted Tor Bridge", desc: "Constructs a military-grade multi-layer onion relay network.", benefit: "-1.00% threat/s" }
        },
        
        // Conquest nodes
        conquest: {
            bank: { name: "District Central Bank", desc: "Infiltrate and redirect wire transaction routing headers.", req: "Requires: 20 DDoS Bots", reward: "Reward: Passive Credits exchange multiplier +15% permanently" },
            police: { name: "Cyber-Police Data Cluster", desc: "Corrupt firewall tables to increase NetWatch exposure cushion.", req: "Requires: 15 Port Scanners", reward: "Reward: Max Threat exposure cap expanded from 100% to 120%" },
            satellite: { name: "NetWatch ComSat-9 Satellite", desc: "Intercept orbital satellite pings to jam tracking traces.", req: "Requires: 8 Trojans", reward: "Reward: All shop security upgrades cost 20% less permanently" },
            military: { name: "Apex Military Ring-0 Core", desc: "Infiltrate defense weapon servers to accelerate compiling output.", req: "Requires: 3 AI Rootkits", reward: "Reward: Active compilation power boosted permanently (+1 LoC/click)" },
            supercomputer: { name: "Apex Central Supercomputer", desc: "The ultimate corporate node. Crash their core computing threads.", req: "Requires: 45,000 LoC directly sacrificed into core buffer", reward: "Reward: Absolute Digital Domination Campaign Victory!" }
        },
        
        // AI Levels
        ai: {
            l1: { name: "Embryo Core Class", skillName: "Core Idle", skillDesc: "AI core is currently sleeping. Feed code to boot synopsis." },
            l2: { name: "Synaptic Script AI", skillName: "Overclock Booster", skillDesc: "Double LoC Click compilation value for 20 seconds. [Cooldown: 90s]" },
            l3: { name: "System Sentinel AI", skillName: "Blackout Protocol", skillDesc: "Instantly wipes all system traces (Threat reset to 0%). [Cooldown: 180s]" },
            l4: { name: "Digital Demi-God AI", skillName: "Siphon Bot", skillDesc: "Siphon crypto wallets (Instantly gain ฿150.00 to ฿250.00 credits). [Cooldown: 300s]" }
        }
    }
};
