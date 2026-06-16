/* --- GAME STATE MODULE --- */

class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.loc = 0;
        this.credits = 0.0;
        this.pps = 0; // Lines of code per second
        this.clickValue = 1; // Lines of code per click
        this.threatLevel = "SECURE"; // SECURE, WATCHED, WANTED, CRITICAL, LOCKDOWN
        this.threatPercent = 0; // 0 to 100
        this.maxThreat = 100; // Expanded to 120 after hacking the police node
        this.threatReduction = 0; // Threat reduction rate per second (passive VPN/Proxies)
        
        // G.H.O.S.T. AI progression
        this.aiLevel = 1;
        this.aiExp = 0;
        
        // Conquest campaign nodes completed
        this.nodesConquered = [];

        // Language State
        const userLang = navigator.language || navigator.userLanguage || "en";
        this.language = userLang.startsWith("fr") ? "fr" : "en";

        // Onboarding Tutorial
        this.tutorialRead = false;

        // Lockdown State
        this.isLockdown = false;
        this.lockdownProgress = 0;
        this.lockdownRequired = 200; // 200 clicks/keys needed to clear

        // Upgrades owned
        this.upgrades = {
            overclock: 0,     // +0.1 LoC per click
            ddos_bot: 0,      // +1 LoC/sec
            port_scanner: 0,  // +5 LoC/sec
            trojan: 0,        // +25 LoC/sec
            rootkit: 0,       // +150 LoC/sec
            
            // Security / VPN upgrades
            proxy_rotator: 0, // -0.05% threat/s
            decoy_gateway: 0, // -0.20% threat/s
            tor_bridge: 0     // -1.00% threat/s
        };

        // Story / Narrative states
        this.completedEvents = [];
        this.activeEventId = null;
        this.unreadCount = 0;
        
        // Settings / Analytics
        this.totalClicks = 0;
        this.totalLocEarned = 0;
        this.totalCreditsEarned = 0;
    }

    // Save game to LocalStorage
    save() {
        const data = {
            loc: this.loc,
            credits: this.credits,
            upgrades: this.upgrades,
            completedEvents: this.completedEvents,
            activeEventId: this.activeEventId,
            unreadCount: this.unreadCount,
            threatLevel: this.threatLevel,
            threatPercent: this.threatPercent,
            isLockdown: this.isLockdown,
            lockdownProgress: this.lockdownProgress,
            tutorialRead: this.tutorialRead,
            language: this.language,
            aiLevel: this.aiLevel,
            aiExp: this.aiExp,
            nodesConquered: this.nodesConquered,
            totalClicks: this.totalClicks,
            totalLocEarned: this.totalLocEarned,
            totalCreditsEarned: this.totalCreditsEarned
        };
        localStorage.setItem("cyber_hack_tycoon_save", JSON.stringify(data));
    }

    // Load game from LocalStorage
    load() {
        try {
            const savedData = localStorage.getItem("cyber_hack_tycoon_save");
            if (savedData) {
                const data = JSON.parse(savedData);
                
                this.loc = typeof data.loc === 'number' ? data.loc : 0;
                this.credits = typeof data.credits === 'number' ? data.credits : 0;
                this.upgrades = data.upgrades ? { ...this.upgrades, ...data.upgrades } : this.upgrades;
                this.completedEvents = Array.isArray(data.completedEvents) ? data.completedEvents : [];
                this.activeEventId = data.activeEventId || null;
                this.unreadCount = typeof data.unreadCount === 'number' ? data.unreadCount : 0;
                this.threatLevel = data.threatLevel || "SECURE";
                this.threatPercent = typeof data.threatPercent === 'number' ? data.threatPercent : 0;
                this.isLockdown = typeof data.isLockdown === 'boolean' ? data.isLockdown : false;
                this.lockdownProgress = typeof data.lockdownProgress === 'number' ? data.lockdownProgress : 0;
                this.tutorialRead = typeof data.tutorialRead === 'boolean' ? data.tutorialRead : false;
                
                const userLang = navigator.language || navigator.userLanguage || "en";
                this.language = data.language || (userLang.startsWith("fr") ? "fr" : "en");
                
                this.aiLevel = typeof data.aiLevel === 'number' ? data.aiLevel : 1;
                this.aiExp = typeof data.aiExp === 'number' ? data.aiExp : 0;
                this.nodesConquered = Array.isArray(data.nodesConquered) ? data.nodesConquered : [];
                
                this.totalClicks = data.totalClicks || 0;
                this.totalLocEarned = data.totalLocEarned || 0;
                this.totalCreditsEarned = data.totalCreditsEarned || 0;
                
                this.recalculateRates();
                return true;
            }
        } catch (e) {
            console.error("Error loading saved game:", e);
        }
        this.recalculateRates();
        return false;
    }

    // Reset and clear save
    clearSave() {
        localStorage.removeItem("cyber_hack_tycoon_save");
        this.reset();
        this.recalculateRates();
    }

    // Recalculate passive generation and click strength
    recalculateRates() {
        // Core Node Domination upgrades calculation
        this.maxThreat = this.nodesConquered.includes("police") ? 120 : 100;

        // Base values
        let baseClickValue = 1;
        let basePps = 0;

        // Upgrade contribution calculations
        baseClickValue += (this.upgrades.overclock || 0) * 0.1;
        basePps += (this.upgrades.ddos_bot || 0) * 1;
        basePps += (this.upgrades.port_scanner || 0) * 5;
        basePps += (this.upgrades.trojan || 0) * 25;
        basePps += (this.upgrades.rootkit || 0) * 150;

        // Node Reward military booster (+1 permanent click value)
        if (this.nodesConquered.includes("military")) {
            baseClickValue += 1.0;
        }

        this.clickValue = Number(baseClickValue.toFixed(1));
        this.pps = basePps;

        // Threat reduction rate calculation
        let reduction = 0;
        reduction += (this.upgrades.proxy_rotator || 0) * 0.05;
        reduction += (this.upgrades.decoy_gateway || 0) * 0.20;
        reduction += (this.upgrades.tor_bridge || 0) * 1.00;
        this.threatReduction = Number(reduction.toFixed(2));

        // Cap threat percent according to node-enlarged max exposure
        if (this.threatPercent >= this.maxThreat) {
            this.threatPercent = this.maxThreat;
            this.isLockdown = true;
        }
        if (this.threatPercent < 0) {
            this.threatPercent = 0;
        }

        // Recalculate Threat levels based on threat percentage
        if (this.isLockdown) {
            this.threatLevel = "LOCKDOWN";
        } else if (this.threatPercent < 20) {
            this.threatLevel = "SECURE";
        } else if (this.threatPercent < 50) {
            this.threatLevel = "WATCHED";
        } else if (this.threatPercent < 80) {
            this.threatLevel = "WANTED";
        } else {
            this.threatLevel = "CRITICAL";
        }
    }

    // Sell LoC for Credits
    sellLoc(percent = 1) {
        if (this.isLockdown) return 0; // Block exchanges during lockdown

        const locToSell = Math.floor(this.loc * percent);
        if (locToSell <= 0) return 0;

        const rate = 0.1; // 10 LoC = 1 Credit (0.1 Credit per LoC)
        let creditsEarned = Number((locToSell * rate).toFixed(2));

        // Apply Bank Conquest Node Booster (+15% credits)
        if (this.nodesConquered.includes("bank")) {
            creditsEarned = Number((creditsEarned * 1.15).toFixed(2));
        }

        this.loc -= locToSell;
        this.credits += creditsEarned;
        this.totalCreditsEarned += creditsEarned;

        this.save();
        return { locSold: locToSell, creditsEarned };
    }
}
