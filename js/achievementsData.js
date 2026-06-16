/* --- ACHIEVEMENTS DATA MODULE --- */

const ACHIEVEMENTS_DATA = [
    {
        id: "script_kiddie",
        icon: "🐣",
        fr: { name: "Script Kiddie", desc: "Compiler vos premières 1 000 lignes de code (LoC)." },
        en: { name: "Script Kiddie", desc: "Compile your first 1,000 lines of code (LoC)." },
        criteria: (state) => state.loc >= 1000
    },
    {
        id: "keyboard_warrior",
        icon: "⌨️",
        fr: { name: "Guerrier du Clavier", desc: "Taper 5 000 touches au total." },
        en: { name: "Keyboard Warrior", desc: "Press keys 5,000 times in total." },
        criteria: (state) => state.totalClicks >= 5000
    },
    {
        id: "ghost_level_5",
        icon: "👻",
        fr: { name: "Spectre Avancé", desc: "Atteindre le niveau 5 de l'IA G.H.O.S.T." },
        en: { name: "Advanced Specter", desc: "Reach G.H.O.S.T. AI level 5." },
        criteria: (state) => state.aiLevel >= 5
    },
    {
        id: "net_magnate",
        icon: "💎",
        fr: { name: "Magnat du Réseau", desc: "Accumuler ฿10 000 crédits." },
        en: { name: "Net Magnate", desc: "Accumulate ฿10,000 credits." },
        criteria: (state) => state.credits >= 10000
    },
    {
        id: "untouchable",
        icon: "🛡️",
        fr: { name: "Intouchable", desc: "Avoir 10 serveurs DDoS actifs simultanément." },
        en: { name: "Untouchable", desc: "Have 10 active DDoS bots simultaneously." },
        criteria: (state) => state.upgrades.ddos_bot >= 10
    },
    {
        id: "breach_master",
        icon: "⚡",
        fr: { name: "Maître des Brèches", desc: "Réussir 20 mini-jeux d'intrusion." },
        en: { name: "Breach Master", desc: "Successfully complete 20 intrusion mini-games." },
        criteria: (state) => (state.stats && state.stats.breachesWon >= 20)
    }
];
