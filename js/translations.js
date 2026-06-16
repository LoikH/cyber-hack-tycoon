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
        tabConversion: "CONVERSION (LOC -> ฿)",
        
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
        
        // Tutorial Window
        tutorialTitle: "MANUEL_SYSTEME: Tutoriel_Sequence_Boot.md",
        tutorialHeader: "👁️ MANUEL D'INTRUSION CYBER_OS 👁️",
        tutorialSub: "Bienvenue opérateur. Lisez les directives de sécurité avant d'accéder aux sous-réseaux globaux.",
        step1Title: "1. COMPILATION ACTIVE (FRAPPES CLAVIER) :",
        step1Desc: "Cliquez sur 'INJECTER CODE' ou pressez N'IMPORTE QUELLE TOUCHE de votre clavier pour compiler des Lignes de Code (LoC) à toute vitesse.",
        step2Title: "2. MARCHÉ NOIR (AUTOMATISATION) :",
        step2Desc: "Allez dans la boutique. Convertissez votre code LoC en Crédits (฿) pour acheter des bots et chevaux de Troie qui génèrent du code de manière autonome.",
        step3Title: "3. EXPOSITION & LOGS (SÉCURITÉ) :",
        step3Desc: "Les bots augmentent votre niveau de menace. À 100%, NetWatch bloque le système ! Utilisez la console Logs Cleaner ou achetez des VPN pour baisser la menace.",
        step4Title: "4. MINI-JEUX DE BYPASS :",
        step4Desc: "Toutes les 45-75s, une faille apparaît ! Cliquez sur l'éclair cyan et résolvez le puzzle en 15 secondes pour gagner une grosse somme de crédits.",
        step5Title: "5. IA G.H.O.S.T. & CONQUÊTES (FIN DE PARTIE) :",
        step5Desc: "Nourrissez votre IA de code LoC pour débloquer des pouvoirs actifs. Hachez les 5 serveurs boss mondiaux pour gagner la campagne !",
        bootBtn: "INITIALISER LA SÉQUENCE DE BOOT / ENTRER DANS LA MATRICE",
        
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
            bank: { name: "Banque Centrale du District", desc: "Infiltrez et redirigez les en-têtes de transactions bancaires.", req: "Requiert : 20 DDoS Bots", reward: "Récompense: Taux de conversion LoC ➔ ฿ augmenté de +15%" },
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
        tabConversion: "CONVERSION (LOC -> ฿)",
        
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
        
        // Tutorial Window
        tutorialTitle: "SYSTEM_MANUAL: Boot_Sequence_Tutorial.md",
        tutorialHeader: "👁️ CYBER_OS INTRUDER MANUAL 👁️",
        tutorialSub: "Welcome operator. Read security directives before accessing global subnets.",
        step1Title: "1. ACTIVE COMPILING (GENERATION ACTIVE) :",
        step1Desc: "Click 'INJECT EXPLOIT CODE' inside the Terminal Window, or PRESS ANY KEY ON YOUR KEYBOARD to compile exploit Lines of Code (LoC) at lightning speeds.",
        step2Title: "2. DARKNET BLACK MARKET (AUTOMATION) :",
        step2Desc: "Go to the Black Market shop. Convert your LoC code into crypto Credits (฿) in the conversion tab, then purchase bots and trojans to generate code automatically.",
        step3Title: "3. EXPOSURE & LOG SCRUBBING (SECURITY) :",
        step3Desc: "Active bots leak traces and creep up your Threat Level. If threat hits 100%, NetWatch triggers a lockdown! Use the Logs Cleaner window (click or type inside it) or buy VPN upgrades to keep the profile low.",
        step4Title: "4. BYPASS INTRUSION MINI-GAMES :",
        step4Desc: "Every 45-75s, a vulnerability appears! Click the floating lightning button and solve the hex matching puzzle in 15 seconds to gain a massive credits payout.",
        step5Title: "5. G.H.O.S.T. AI & CONQUEST (ENDGAME) :",
        step5Desc: "Feed code to your AI core to unlock powers (Overclocking, Blackout, Cash siphons). Hack the 5 global target mainframes to permanently bend system limits and win the campaign!",
        bootBtn: "INITIALIZE BOOT SEQUENCE / ENTER MATRIX",
        
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
