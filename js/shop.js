/* --- SHOP CONFIGURATION AND HELPERS --- */

const SHOP_ITEMS = [
    {
        id: "overclock",
        name: "CPU Overclocking",
        baseCost: 15,
        costMultiplier: 1.15,
        desc: "Overclocks your central processor to compile code faster.",
        statBenefit: "+0.1 LoC per click",
        type: "click",
        rate: 0.1
    },
    {
        id: "ddos_bot",
        name: "DDoS Botnet Zombie",
        baseCost: 50,
        costMultiplier: 1.15,
        desc: "A compromised IoT device pinging targets continuously.",
        statBenefit: "+1.0 LoC/s",
        type: "passive",
        rate: 1
    },
    {
        id: "port_scanner",
        name: "Subnet Port Scanner",
        baseCost: 280,
        costMultiplier: 1.16,
        desc: "Automated scanner probing external networks for vulnerabilities.",
        statBenefit: "+5.0 LoC/s",
        type: "passive",
        rate: 5
    },
    {
        id: "trojan",
        name: "Remote Access Trojan",
        baseCost: 1200,
        costMultiplier: 1.18,
        desc: "Silent backdoor deployed inside corporate intranet networks.",
        statBenefit: "+25.0 LoC/s",
        type: "passive",
        rate: 25
    },
    {
        id: "rootkit",
        name: "AI-Powered Kernel Rootkit",
        baseCost: 7500,
        costMultiplier: 1.20,
        desc: "Advanced self-learning AI module taking ring-0 OS privileges.",
        statBenefit: "+150.0 LoC/s",
        type: "passive",
        rate: 150
    }
];

const SECURITY_ITEMS = [
    {
        id: "proxy_rotator",
        name: "Proxy Node Rotator",
        baseCost: 80,
        costMultiplier: 1.15,
        desc: "Rotates your external routing hops dynamically in the background.",
        statBenefit: "-0.05% threat/s",
        type: "security",
        rate: 0.05
    },
    {
        id: "decoy_gateway",
        name: "Decoy Gateway Tunnel",
        baseCost: 350,
        costMultiplier: 1.16,
        desc: "Funnels telemetry traces through fake network honey-pots.",
        statBenefit: "-0.20% threat/s",
        type: "security",
        rate: 0.20
    },
    {
        id: "tor_bridge",
        name: "Encrypted Tor Bridge",
        baseCost: 1400,
        costMultiplier: 1.18,
        desc: "Constructs a military-grade multi-layer onion relay network.",
        statBenefit: "-1.00% threat/s",
        type: "security",
        rate: 1.00
    }
];

const CONQUEST_NODES = [
    {
        id: "bank",
        name: "District Central Bank",
        desc: "Infiltrate and redirect wire transaction routing headers.",
        reqText: "Requires: 20 DDoS Bots",
        verify: (state) => (state.upgrades.ddos_bot || 0) >= 20,
        rewardText: "Reward: Passive Credits exchange multiplier +15% permanently",
        action: (state) => {}
    },
    {
        id: "police",
        name: "Cyber-Police Data Cluster",
        desc: "Corrupt firewall tables to increase NetWatch exposure cushion.",
        reqText: "Requires: 15 Port Scanners",
        verify: (state) => (state.upgrades.port_scanner || 0) >= 15,
        rewardText: "Reward: Max Threat exposure cap expanded from 100% to 120%",
        action: (state) => {}
    },
    {
        id: "satellite",
        name: "NetWatch ComSat-9 Satellite",
        desc: "Intercept orbital satellite pings to jam tracking traces.",
        reqText: "Requires: 8 Trojans",
        verify: (state) => (state.upgrades.trojan || 0) >= 8,
        rewardText: "Reward: All shop security upgrades cost 20% less permanently",
        action: (state) => {}
    },
    {
        id: "military",
        name: "Apex Military Ring-0 Core",
        desc: "Infiltrate defense weapon servers to accelerate compiling output.",
        reqText: "Requires: 3 AI Rootkits",
        verify: (state) => (state.upgrades.rootkit || 0) >= 3,
        rewardText: "Reward: Active compilation power boosted permanently (+1 LoC/click)",
        action: (state) => {}
    },
    {
        id: "supercomputer",
        name: "Apex Central Supercomputer",
        desc: "The ultimate corporate node. Crash their core computing threads.",
        reqText: "Requires: 45,000 LoC directly sacrificed into core buffer",
        verify: (state) => state.loc >= 45000,
        rewardText: "Reward: Absolute Digital Domination Campaign Victory!",
        action: (state) => {
            state.loc -= 45000;
        }
    }
];

const AI_LEVELS = [
    {
        level: 1,
        name: "Embryo Core Class",
        avatar: "👁️",
        requiredExp: 2500,
        skillName: null,
        skillDesc: "AI core is currently sleeping. Feed code to boot synopsis."
    },
    {
        level: 2,
        name: "Synaptic Script AI",
        avatar: "🧠",
        requiredExp: 15000,
        skillName: "Overclock Booster",
        skillDesc: "Double LoC Click compilation value for 20 seconds.",
        cooldownMax: 90
    },
    {
        level: 3,
        name: "System Sentinel AI",
        avatar: "🛡️",
        requiredExp: 75000,
        skillName: "Blackout Protocol",
        skillDesc: "Instantly wipes all system traces (Threat reset to 0%).",
        cooldownMax: 180
    },
    {
        level: 4,
        name: "Digital Demi-God AI",
        avatar: "👾",
        requiredExp: Infinity,
        skillName: "Siphon Bot",
        skillDesc: "Siphon crypto wallets (Instantly gain ฿150.00 to ฿250.00 credits).",
        cooldownMax: 300
    }
];

// Helper to calculate the current cost of an item based on quantity owned
function calculateCost(item, quantityOwned) {
    return Math.floor(item.baseCost * Math.pow(item.costMultiplier, quantityOwned));
}
