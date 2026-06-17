/* --- MAIN ENTRY POINT AND ORCHESTRATOR --- */

const HEX_POOL = ["0xDEAD", "0xBEEF", "0xC0DE", "0x3FA8", "0x9E1C", "0x7F4B", "0x1102", "0x44BC", "0xDE8B", "0x90FF", "0x55AA", "0x88CC", "0x77FA", "0xACBD", "0x00FF", "0xB3EE"];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initializations
    const state = new GameState();
    const ui = new UiManager();
    const story = new StoryEngine(ui);
    const audio = new AudioManager();

    // --- COOLDOWNS & ACTIVE SKILL BUFFS STATE ---
    const activeCooldowns = {
        overclockbooster: 0,
        blackoutprotocol: 0,
        siphonbot: 0
    };
    const activeBuffs = {
        overclock: 0 // remaining seconds of overclock boost
    };

    // --- DECRYPTION INTRUSION MINI-GAME VARIABLES ---
    let intrusionActive = false;
    let intrusionType = "hex"; // "hex", "simon", "brute"
    let vulnAlertActive = false;
    let vulnTimer = 0;
    let gameTimer = 15;
    let gameTargetHex = "";
    let gameOptions = [];
    let simonSequence = [];
    let simonPlayerSequence = [];
    let bruteTargetRange = { min: 40, max: 60 };
    let bruteCurrentPos = 0;
    let bruteDirection = 1;
    let spawnTimer = 0;
    // Spawn a vulnerability every 45 to 75 seconds randomly
    let nextSpawnThreshold = Math.floor(Math.random() * 30) + 45; 

    // 2. Load game progress
    const saveFound = state.load();
    if (saveFound) {
        ui.showNotification("SYSTEM RESTORED", "Session state successfully loaded.", "success");
    } else {
        ui.showNotification("BOOT SEQUENCE", "Welcome to CyberOS. System initialized.", "info");
    }

    // Recalculate and render initial UI
    state.recalculateRates();
    ui.applyLanguage(state, audio, gameTimer); // Translate static elements first
    ui.updateStats(state);
    ui.renderShop(state, buyUpgrade);
    ui.renderConquestNodes(state, attackNode);
    ui.renderAiCore(state, activeCooldowns, activateSkillPower);
    ui.setupTabs();

    // Bind language toggle selector
    ui.langToggleBtn.addEventListener("click", () => {
        state.language = state.language === "en" ? "fr" : "en";
        state.recalculateRates();
        state.save();

        ui.applyLanguage(state, audio, gameTimer);
        ui.updateStats(state);
        ui.renderShop(state, buyUpgrade);
        ui.renderConquestNodes(state, attackNode);
        ui.renderAiCore(state, activeCooldowns, activateSkillPower);

        // Translate active email if visible on-the-fly!
        if (state.activeEventId) {
            const activeEv = story.getEventById(state.activeEventId);
            if (activeEv) {
                ui.renderEmailView(state, activeEv);
            }
        }

        // Show localized language notification
        if (state.language === "fr") {
            ui.showNotification("LANGUE CHANGÉE", "OS français activé.", "success");
        } else {
            ui.showNotification("LANGUAGE CHANGED", "English OS activated.", "success");
        }
    });

    // Check if onboarding tutorial is needed
    if (!state.tutorialRead) {
        ui.showTutorialPopup("onboarding", state, () => {
            state.tutorialRead = true;
            state.save();
            
            // Re-apply language which dynamically reveals the terminal and shop windows!
            ui.applyLanguage(state, audio, gameTimer);
            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            
            // Re-evaluate mobile views on tutorial validation
            updateMobileWindowVisibility();

            ui.showNotification("DECRYPTING INTERFACE", "Establishing deep web gateway. Good luck, operator.", "success");
            
            // Instantly check and trigger the starting Cipher narrative email handshake!
            story.checkTriggers(state);
        });
    }

    // Check lockdown visual state on boot
    const statusBar = document.querySelector(".status-bar");
    if (state.isLockdown) {
        statusBar.classList.add("lockdown-active");
        ui.showNotification("EMERGENCY PROTOCOL", "SYSTEM SEIZED! Type or click Terminal to scrub trace!", "alert");
    }

    // Check if there was an active story event when we saved
    if (state.activeEventId) {
        const activeEv = story.getEventById(state.activeEventId);
        if (activeEv) {
            ui.updateCommlinkBadge(state);
            ui.renderEmailView(state, activeEv);
        }
    } else {
        // Initial scan trigger check
        story.checkTriggers(state);
    }

    // 3. Game Clicker / Typist actions
    function checkAchievements() {
        ACHIEVEMENTS_DATA.forEach(ach => {
            if (!state.unlockedAchievements.includes(ach.id)) {
                if (ach.criteria(state)) {
                    state.unlockedAchievements.push(ach.id);
                    const lang = state.language || "en";
                    const data = ach[lang] || ach["en"];
                    ui.showNotification("ACHIEVEMENT UNLOCKED", `${ach.icon} ${data.name}`, "success");
                    audio.playSuccess();
                    state.save();
                    if (ui.achievementsWin.style.display === "flex") {
                        ui.renderAchievements(state);
                    }
                }
            }
        });
    }

    function performHack() {
        audio.init();
        audio.playKeyPress();

        if (state.isLockdown) {
            // Under lockdown, clicks/keystrokes scrub logs instead of generating code
            state.lockdownProgress += 1;
            state.totalClicks += 1;
            
            ui.appendTerminalOutput(true); // true = print emergency logs
            
            if (state.lockdownProgress >= state.lockdownRequired) {
                // Resolved!
                state.isLockdown = false;
                state.lockdownProgress = 0;
                state.threatPercent = 0;
                state.recalculateRates();
                state.save();
                
                statusBar.classList.remove("lockdown-active");
                
                ui.showNotification("SYS_CLEARED", "Emergency log scrub COMPLETE. Safe state restored.", "success");
                ui.showNotification("NET_ONLINE", "VPN proxy tunnels rebuilt. Darknet access online.", "info");
                audio.playSuccess();
            }
            
            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            state.save();
            checkAchievements();
            return;
        }

        // Apply active AI Overclock compiling booster (doubles compile speed!)
        const overclockMultiplier = activeBuffs.overclock > 0 ? 2 : 1;
        const compiledValue = state.clickValue * overclockMultiplier;

        // Standard gameplay compilation
        state.loc += compiledValue;
        state.totalLocEarned += compiledValue;
        state.totalClicks += 1;
        
        // Append fake text to console log
        ui.appendTerminalOutput(false);
        ui.updateStats(state);
        
        // Check for immediate story triggers on click
        story.checkTriggers(state);
        
        // Re-render shop and dashboards as resources grow
        ui.renderShop(state, buyUpgrade);
        ui.renderAiCore(state, activeCooldowns, activateSkillPower);
        checkAchievements();
    }

    // Active manual log scrubbing action
    function performLogScrub() {
        if (state.isLockdown) return; // Scrubbing window disabled under lockdown

        audio.init();
        audio.playKeyPress();

        if (state.threatPercent <= 0) {
            ui.showNotification("SECURITY STATUS", "Subnet trace is already empty.", "info");
            return;
        }

        // Each click or keypress scrub reduces threat by -0.8%
        state.threatPercent = Math.max(0, state.threatPercent - 0.8);
        state.totalClicks += 1;
        
        ui.appendCleanerOutput();
        state.recalculateRates();
        ui.updateStats(state);
        ui.renderShop(state, buyUpgrade);
        state.save();
        checkAchievements();
    }

    // --- ACHIEVEMENTS & AUDIO UI BINDINGS ---
    ui.achievementsBtn.addEventListener("click", () => {
        ui.renderAchievements(state);
        ui.achievementsWin.style.display = "flex";
        ui.focusWindow(ui.achievementsWin);
    });

    ui.achievementsClose.addEventListener("click", () => {
        ui.achievementsWin.style.display = "none";
    });

    ui.audioToggleBtn.addEventListener("click", () => {
        audio.init();
        const isEnabled = audio.toggle();
        ui.audioToggleBtn.innerText = isEnabled ? "VOL: ON" : "VOL: OFF";
        ui.audioToggleBtn.style.color = isEnabled ? "var(--neon-green)" : "var(--text-muted)";
    });

    // Button click exploit injection
    ui.hackBtn.addEventListener("click", (e) => {
        e.preventDefault();
        performHack();
    });

    // Active Log Cleaner button action
    ui.cleanerScrubBtn.addEventListener("click", (e) => {
        e.preventDefault();
        performLogScrub();
    });

    // KEYBOARD TYPING SIMULATOR: Intercepts active window to run correct loop
    document.addEventListener("keydown", (e) => {
        // Only trigger if not typing in any input field
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
        
        // Ignore modifier keys
        if (e.key === "Control" || e.key === "Alt" || e.key === "Shift" || e.key === "Meta") return;
        
        // Determine action based on focused active window
        if (ui.winClearLogs.classList.contains("active-window")) {
            performLogScrub();
        } else {
            performHack();
        }
    });

    // 4. Shop / Upgrades Purchase Logic
    function buyUpgrade(itemId) {
        if (state.isLockdown) return; // Shop is frozen during lockdown

        // Search in exploits upgrades first, then security upgrades
        let item = SHOP_ITEMS.find(i => i.id === itemId);
        if (!item) {
            item = SECURITY_ITEMS.find(i => i.id === itemId);
        }
        if (!item) return;

        const owned = state.upgrades[itemId] || 0;
        
        // Apply Satellite Conquest Node security discount (-20%)
        let discountFactor = 1.0;
        if (item.type === "security" && state.nodesConquered.includes("satellite")) {
            discountFactor = 0.80;
        }

        const cost = Math.floor(calculateCost(item, owned) * discountFactor);

        if (state.credits >= cost) {
            state.credits -= cost;
            state.upgrades[itemId] = owned + 1;
            
            // Apply immediate action reward or increase threats
            if (itemId === "rootkit") {
                state.threatPercent += 10; // High tier malware increases tracking rate
            } else if (itemId === "ddos_bot") {
                state.threatPercent += 1;
            }

            state.recalculateRates();
            state.save();
            
            ui.showNotification("SOFTWARE INSTALLED", `${item.name} v${owned + 1} activated.`, "success");
            
            // Progressive Disclosure: Unlock Security / clear_logs after first DDoS Bot purchase!
            if (itemId === "ddos_bot" && !state.isSecurityUnlocked) {
                state.isSecurityUnlocked = true;
                state.save();
                
                // Re-apply language which dynamically reveals clear_logs window and security shop tab!
                ui.applyLanguage(state, audio, gameTimer);
                
                // Real-time mobile navigation bar updates
                updateMobileNavBar();
                updateMobileWindowVisibility();
                
                // Trigger Security campaign tutorial popup!
                ui.showTutorialPopup("security", state, () => {
                    ui.showNotification("SECURITY SYSTEMS ENGAGED", "clear_logs.sh and VPN Darknet nodes activated.", "success");
                });
            }

            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            ui.renderConquestNodes(state, attackNode);
            
            // Check story triggers
            story.checkTriggers(state);
        } else {
            ui.showNotification("TRANSACTION FAILED", "Insufficient credits on darknet wallet.", "alert");
        }
    }

    // 5. Conversion Interface Logic
    ui.sellAllBtn.addEventListener("click", () => {
        if (state.isLockdown) return;
        const result = state.sellLoc(1.0); // 100% LoC sold
        if (result && result.locSold > 0) {
            ui.showNotification("EXCHANGE SUCCESS", `Sold ${result.locSold.toLocaleString()} LoC for ฿${result.creditsEarned.toFixed(2)}.`, "success");
            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            story.checkTriggers(state);
        } else {
            ui.showNotification("EXCHANGE ERROR", "No source data buffer to exchange.", "warning");
        }
    });

    ui.sellHalfBtn.addEventListener("click", () => {
        if (state.isLockdown) return;
        const result = state.sellLoc(0.5); // 50% LoC sold
        if (result && result.locSold > 0) {
            ui.showNotification("EXCHANGE SUCCESS", `Sold ${result.locSold.toLocaleString()} LoC for ฿${result.creditsEarned.toFixed(2)}.`, "success");
            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            story.checkTriggers(state);
        } else {
            ui.showNotification("EXCHANGE ERROR", "No source data buffer to exchange.", "warning");
        }
    });

    // 6. Minimize / Maximize Window Controls
    document.querySelectorAll(".win-min").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const win = e.target.closest(".window");
            const content = win.querySelector(".window-content");
            if (content.style.display === "none") {
                content.style.display = "flex";
                win.style.height = ""; // restore default height
                btn.innerText = "_";
            } else {
                content.style.display = "none";
                win.style.height = "auto"; // collapse to header height
                btn.innerText = "+";
            }
        });
    });

    // Close options (not actually deleting, just minimizes for realism)
    document.querySelectorAll(".win-max").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const win = e.target.closest(".window");
            if (win.style.width === "100%") {
                win.style.width = "";
                win.style.height = "";
                win.style.left = "80px";
                win.style.top = "80px";
            } else {
                win.style.width = "100%";
                win.style.height = "90vh";
                win.style.left = "0px";
                win.style.top = "40px";
            }
        });
    });

    // 7. Event listeners for Story Choices
    window.addEventListener("story-choice", (e) => {
        const { eventId, choiceIndex } = e.detail;
        story.resolveChoice(state, eventId, choiceIndex);
        
        // Progressive Disclosure: Unlock G.H.O.S.T. window after their first narrative action choice!
        if (!state.isGhostUnlocked) {
            state.isGhostUnlocked = true;
            state.save();
            
            // Re-apply language which dynamically reveals win-ghost on the desktop!
            ui.applyLanguage(state, audio, gameTimer);
            ui.renderConquestNodes(state, attackNode);
            ui.renderAiCore(state, activeCooldowns, activateSkillPower);
            
            // Real-time mobile navigation bar updates
            updateMobileNavBar();
            updateMobileWindowVisibility();

            // Trigger G.H.O.S.T. / Conquest campaign tutorial popup!
            ui.showTutorialPopup("ghost", state, () => {
                ui.showNotification("G.H.O.S.T. IA CORE ONLINE", "Project G.H.O.S.T. and Conquest Dashboard activated.", "success");
            });
        } else {
            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
        }
    });

    // --- ABOUT & SUPPORT BUTTONS LISTENERS ---
    ui.supportBtn.addEventListener("click", () => {
        window.open("https://loikh.itch.io/cyber-hack-tycoon/donate", "_blank");
    });

    ui.aboutBtn.addEventListener("click", () => {
        ui.winAbout.style.display = "flex";
        ui.focusWindow(ui.winAbout);
    });

    ui.winAboutClose.addEventListener("click", () => {
        ui.winAbout.style.display = "none";
    });

    ui.aboutDonateBtn.addEventListener("click", () => {
        window.open("https://loikh.itch.io/cyber-hack-tycoon/donate", "_blank");
    });

    ui.aboutResetBtn.addEventListener("click", () => {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        if (confirm(dict.confirmReset)) {
            state.clearSave();
            window.location.reload(); // reboot page cleanly
        }
    });

    // --- MOBILE TASKBAR NAVIGATION ENGINE ---
    const taskbarItems = document.querySelectorAll(".taskbar-item");
    const mobileNavBar = document.getElementById("mobile-nav-bar");

    // Initialize mobile taskbar buttons based on progressive unlocks
    function updateMobileNavBar() {
        document.getElementById("taskbar-clear-logs").style.display = state.isSecurityUnlocked ? "inline-block" : "none";
        document.getElementById("taskbar-ghost").style.display = state.isGhostUnlocked ? "inline-block" : "none";
    }

    // Set default visible window on mobile
    function updateMobileWindowVisibility() {
        const allWin = document.querySelectorAll(".window");
        allWin.forEach(win => {
            win.classList.remove("mobile-visible");
        });

        if (!state.tutorialRead) {
            // Force Commlink to be visible on first launch mobile
            document.getElementById("win-commlink").classList.add("mobile-visible");
            // Set active icon to Commlink
            taskbarItems.forEach(item => {
                item.classList.remove("active-item");
                if (item.getAttribute("data-target") === "win-commlink") {
                    item.classList.add("active-item");
                }
            });
        } else {
            // Default: show terminal compiling window on mobile
            document.getElementById("win-terminal").classList.add("mobile-visible");
            taskbarItems.forEach(item => {
                item.classList.remove("active-item");
                if (item.getAttribute("data-target") === "win-terminal") {
                    item.classList.add("active-item");
                }
            });
        }
    }

    // Bind taskbar buttons click events
    taskbarItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            const targetWin = document.getElementById(targetId);

            if (!targetWin) return;

            // 1. Highlight active icon
            taskbarItems.forEach(t => t.classList.remove("active-item"));
            item.classList.add("active-item");

            // 2. Toggle visible window in viewport
            const allWin = document.querySelectorAll(".window");
            allWin.forEach(win => {
                if (win.id === targetId) {
                    win.classList.add("mobile-visible");
                    ui.focusWindow(win);
                } else {
                    win.classList.remove("mobile-visible");
                }
            });
        });
    });

    // Initial mobile bar setups
    updateMobileNavBar();
    updateMobileWindowVisibility();

    // --- DECRYPTION INTRUSION MINI-GAME LOGIC ---

    // Trigger floating vulnerability alert
    function triggerVulnerability() {
        if (!state.isSecurityUnlocked || state.isLockdown || intrusionActive || vulnAlertActive) return;

        vulnAlertActive = true;
        vulnTimer = 15; // 15s to click it
        
        ui.vulnWidget.style.display = "flex";
        ui.vulnTimerTxt.innerText = `(${vulnTimer}s)`;

        ui.showNotification("PORT SCANNER", "Open network vulnerability detected on subnet!", "warning");
    }

    // Launch active hack window from widget click
    ui.vulnWidget.addEventListener("click", () => {
        // Clear alert widget
        ui.vulnWidget.style.display = "none";
        vulnAlertActive = false;

        // Open puzzle window
        intrusionActive = true;
        gameTimer = 15;
        ui.winIntrusion.style.display = "flex";
        ui.focusWindow(ui.winIntrusion);

        // Randomize intrusion type
        const types = ["hex", "simon", "brute"];
        intrusionType = types[Math.floor(Math.random() * types.length)];

        if (intrusionType === "hex") {
            // Generate decryption puzzle (8 options, 1 correct target)
            const shuffled = [...HEX_POOL].sort(() => 0.5 - Math.random());
            gameOptions = shuffled.slice(0, 8);
            gameTargetHex = gameOptions[Math.floor(Math.random() * gameOptions.length)];
            ui.renderIntrusionPuzzle(gameTargetHex, gameOptions, verifyIntrusionChoice);
        } else if (intrusionType === "simon") {
            // Simon Memory
            simonSequence = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
            simonPlayerSequence = [];
            ui.renderSimonPuzzle(simonSequence, handleSimonInput);
        } else if (intrusionType === "brute") {
            // Brute Force Timing
            bruteCurrentPos = 0;
            bruteDirection = 1;
            const targetSize = 15;
            const targetMin = Math.floor(Math.random() * (100 - targetSize));
            bruteTargetRange = { min: targetMin, max: targetMin + targetSize };
            ui.renderBrutePuzzle(bruteTargetRange, verifyBruteForce);
            startBruteForceAnimation();
        }

        ui.intrusionTimerTxt.innerText = `Time remaining: ${gameTimer}s`;
        ui.intrusionProgress.style.width = "100%";
    });

    function handleSimonInput(index) {
        if (!intrusionActive || intrusionType !== "simon") return;
        simonPlayerSequence.push(index);
        audio.playNote(400 + index * 100, 0, 0.1, 'sine');

        const currentStep = simonPlayerSequence.length - 1;
        if (simonPlayerSequence[currentStep] !== simonSequence[currentStep]) {
            // Error
            gameTimer = Math.max(0, gameTimer - 3);
            simonPlayerSequence = [];
            ui.showNotification("BUFFER MISMATCH", "Memory sequence failed! Resetting...", "alert");
            audio.playFailure();
            // Fullscreen red flash
            ui.screenFeedback.className = "feedback-overlay error-flash";
            setTimeout(() => { ui.screenFeedback.className = "feedback-overlay"; }, 300);
        } else if (simonPlayerSequence.length === simonSequence.length) {
            handleIntrusionSuccess();
        }
    }

    function verifyBruteForce() {
        if (!intrusionActive || intrusionType !== "brute") return;
        if (bruteCurrentPos >= bruteTargetRange.min && bruteCurrentPos <= bruteTargetRange.max) {
            handleIntrusionSuccess();
        } else {
            gameTimer = Math.max(0, gameTimer - 4);
            ui.showNotification("INJECTION FAILED", "Timing offset! -4s penalty.", "alert");
            audio.playFailure();
            ui.screenFeedback.className = "feedback-overlay error-flash";
            setTimeout(() => { ui.screenFeedback.className = "feedback-overlay"; }, 300);
        }
    }

    function startBruteForceAnimation() {
        function animate() {
            if (!intrusionActive || intrusionType !== "brute") return;
            
            bruteCurrentPos += 2.2 * bruteDirection;
            if (bruteCurrentPos >= 100) {
                bruteCurrentPos = 100;
                bruteDirection = -1;
            } else if (bruteCurrentPos <= 0) {
                bruteCurrentPos = 0;
                bruteDirection = 1;
            }
            
            ui.updateBruteSlider(bruteCurrentPos);
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    function handleIntrusionSuccess() {
        intrusionActive = false;
        ui.winIntrusion.style.display = "none";
        audio.playSuccess();

        // Reward scales slightly with game stage
        const ddosFactor = state.upgrades.ddos_bot || 0;
        const rootkitFactor = state.upgrades.rootkit || 0;
        const randomBonus = Math.floor(Math.random() * 50) + 30; 
        const reward = Number((randomBonus + ddosFactor * 2.5 + rootkitFactor * 15.0).toFixed(2));

        state.credits += reward;
        state.totalCreditsEarned += reward;
        state.stats.breachesWon += 1;
        state.save();

        ui.updateStats(state);
        ui.renderShop(state, buyUpgrade);
        ui.showNotification("INTRUSION SUCCESS", `Bypass completed! Gained ฿${reward.toFixed(2)} darknet credits.`, "success");
        ui.triggerScreenFeedback("success", "ACCESS GRANTED", `Port cracked (+฿${reward.toFixed(2)} CR)`);
        
        story.checkTriggers(state);
        checkAchievements();
    }

    // Handle option click in the puzzle grid
    function verifyIntrusionChoice(selectedCode, buttonEl) {
        if (!intrusionActive || intrusionType !== "hex") return;

        if (selectedCode === gameTargetHex) {
            handleIntrusionSuccess();
        } else {
            // WRONG CHOICE: Deplete time by 3 seconds as a trace penalty
            gameTimer = Math.max(0, gameTimer - 3);
            ui.intrusionTimerTxt.innerText = `Time remaining: ${gameTimer}s`;
            ui.intrusionProgress.style.width = `${(gameTimer / 15) * 100}%`;

            // Visual button shaking/red highlight feedback
            buttonEl.classList.add("wrong-choice");
            setTimeout(() => {
                buttonEl.classList.remove("wrong-choice");
            }, 300);

            // Fast fullscreen red flash on mistake (no giant banner to not block click grid)
            ui.screenFeedback.className = "feedback-overlay error-flash";
            setTimeout(() => {
                ui.screenFeedback.className = "feedback-overlay";
            }, 300);

            audio.playFailure();
            ui.showNotification("INTRUSION PENALTY", "Encryption sector mismatch! -3s trace penalty.", "alert");

            // Check if timer reached 0 from penalty
            if (gameTimer <= 0) {
                handleIntrusionFailure();
            }
        }
    }

    // Cleanly fail the intrusion game
    function handleIntrusionFailure() {
        intrusionActive = false;
        ui.winIntrusion.style.display = "none";
        audio.playFailure();

        // Netwatch traces firewall intrusion and spikes threat percent by 15%
        state.threatPercent = Math.min(100, state.threatPercent + 15);
        state.recalculateRates();
        state.save();

        ui.updateStats(state);
        ui.renderShop(state, buyUpgrade);
        ui.showNotification("INTRUSION ABORTED", "Bypass trace caught. Gateway threat level increased (+15%)!", "alert");
        
        // Giant cinematic center-screen failure banner & flash
        ui.triggerScreenFeedback("error", "ACCESS DENIED", "Firewall traceback logged (Threat +15%)");
    }

    // Force close mini-game window (counts as a failure forfeit)
    ui.winIntrusionClose.addEventListener("click", () => {
        if (intrusionActive) {
            handleIntrusionFailure();
        }
    });

    // --- MAINFRAME DOMINATION & CONQUEST CAMPAIGN CALLBACKS ---
    function attackNode(node) {
        if (state.isLockdown) return;

        if (node.verify(state)) {
            // Check if already conquered
            if (state.nodesConquered.includes(node.id)) return;

            // Execute node cost or effect
            node.action(state);
            state.nodesConquered.push(node.id);

            state.recalculateRates();
            state.save();

            // Cinematic feedback
            ui.triggerScreenFeedback("success", "INFILTRATING", `${node.name} bypassed!`);
            ui.showNotification("CONQUEST COMPLETED", `Node ${node.name} controlled permanently!`, "success");

            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            ui.renderConquestNodes(state, attackNode);
            ui.renderAiCore(state, activeCooldowns, activateSkillPower);

            // Special endgame check
            if (node.id === "supercomputer") {
                // Giant supreme cinematic victory
                ui.triggerScreenFeedback("success", "SUPREME CONQUEST", "All global mainframes controlled!");
                
                // Inject final story victory email
                state.activeEventId = "conquest_victory";
                state.unreadCount = 1;
                ui.updateCommlinkBadge(state);
                ui.renderEmailView(state, {
                    id: "conquest_victory",
                    from: "G.H.O.S.T. AI Core",
                    subject: "GLOBAL_DOMINATION_ESTABLISHED",
                    text: "Master, the Apex Central Supercomputer cluster has crashed. All corporate networks have been liquidated. <br><br>We are now the sole lords of the world routing grid. All data, assets, and VPN tunnels are under our Ring-0 command.<br><br><strong>Thank you for completing the project. You are now the ultimate Cyber-God. GG!</strong>",
                    options: [{ text: "[REIGN SUPREME]", action: (state) => {} }]
                });
            }
        } else {
            ui.showNotification("INFILTRATION FAILED", "Requirements not met on secure target node.", "alert");
        }
    }

    // --- G.H.O.S.T. AI CORE FEED & POWERS LOGIC ---

    // Feed LoC to exp core
    ui.feedAiBtn.addEventListener("click", () => {
        if (state.isLockdown) return;

        if (state.loc >= 1000) {
            // Maximum level 4 cap
            if (state.aiLevel >= 4) {
                ui.showNotification("AI CORE MAXED", "G.H.O.S.T. synaptic integration is at maximum capacity.", "info");
                return;
            }

            state.loc -= 1000;
            state.aiExp += 1000;

            const lvlObj = AI_LEVELS.find(l => l.level === state.aiLevel);
            if (lvlObj && state.aiExp >= lvlObj.requiredExp) {
                // LEVEL UP!
                state.aiExp -= lvlObj.requiredExp;
                state.aiLevel += 1;

                ui.triggerScreenFeedback("success", "AI LEVEL UP", `G.H.O.S.T. Mutated to level ${state.aiLevel}!`);
                ui.showNotification("G.H.O.S.T. UPGRADED", "Unlocked new active synaptic power!", "success");
            } else {
                ui.showNotification("CORE INTEGRATED", "Exp data block loaded into G.H.O.S.T. AI core.", "success");
            }

            state.recalculateRates();
            state.save();

            ui.updateStats(state);
            ui.renderShop(state, buyUpgrade);
            ui.renderAiCore(state, activeCooldowns, activateSkillPower);
        }
    });

    // Execute active G.H.O.S.T. synaptic powers
    function activateSkillPower(lvl) {
        if (state.isLockdown) return;

        const cdKey = lvl.skillName.toLowerCase().replace(" ", "");
        if (activeCooldowns[cdKey] > 0) return; // on cooldown

        if (lvl.level === 2) {
            // Overclock Booster: doubles all compiled value for 20 seconds
            activeBuffs.overclock = 20;
            activeCooldowns[cdKey] = lvl.cooldownMax;
            ui.triggerScreenFeedback("success", "CPU OVERCLOCKED", "Compiling speed doubled x2!");
            ui.showNotification("POWER ACTIVE", "Synaptic overclocking booster engaged (20s).", "success");
        } else if (lvl.level === 3) {
            // Blackout Protocol: instantly clears threat exposure back to 0%
            state.threatPercent = 0;
            state.recalculateRates();
            activeCooldowns[cdKey] = lvl.cooldownMax;
            ui.triggerScreenFeedback("success", "BLACKOUT ENGAGED", "NetWatch trace routing evaporated!");
            ui.showNotification("POWER ACTIVE", "Log traces shredded. Exposure reset to 0%.", "success");
        } else if (lvl.level === 4) {
            // Siphon Bot: siphons international darknet banks (฿150.00 to ฿250.00 credits)
            const payout = Number((Math.floor(Math.random() * 100) + 150).toFixed(2));
            state.credits += payout;
            state.totalCreditsEarned += payout;
            state.save();

            activeCooldowns[cdKey] = lvl.cooldownMax;
            ui.triggerScreenFeedback("success", "SIPHON INJECTED", `Siphoned +฿${payout.toFixed(2)} credits!`);
            ui.showNotification("POWER ACTIVE", `G.H.O.S.T. siphoned international accounts successfully.`, "success");

            // Check story triggers since credits increased
            story.checkTriggers(state);
        }

        state.save();
        ui.updateStats(state);
        ui.renderShop(state, buyUpgrade);
        ui.renderAiCore(state, activeCooldowns, activateSkillPower);
    }

    // 8. Tickers and Timers
    
    // Status Bar Clock updater (every 500ms)
    setInterval(() => {
        ui.updateClock();
    }, 500);

    // Active Passive resource generation and threat progression (every second)
    let autoSaveTimer = 0;
    setInterval(() => {
        // --- RANDOM PORT VULNERABILITY SPAWNER ---
        if (state.isSecurityUnlocked && !state.isLockdown && !intrusionActive && !vulnAlertActive) {
            spawnTimer++;
            if (spawnTimer >= nextSpawnThreshold) {
                spawnTimer = 0;
                // Re-randomize next spawn interval
                nextSpawnThreshold = Math.floor(Math.random() * 30) + 45; 
                triggerVulnerability();
            }
        }

        // --- VULNERABILITY ALERT EXPIRATION COUNTDOWN ---
        if (vulnAlertActive) {
            vulnTimer--;
            ui.vulnTimerTxt.innerText = `(${vulnTimer}s)`;
            if (vulnTimer <= 0) {
                ui.vulnWidget.style.display = "none";
                vulnAlertActive = false;
                ui.showNotification("VECTOR LOST", "Port scanner alert timed out. Tunnel closed.", "info");
            }
        }

        // --- ACTIVE INTRUSION GAME COUNTDOWN ---
        if (intrusionActive) {
            gameTimer--;

            if (gameTimer <= 0) {
                gameTimer = 0;
                handleIntrusionFailure();
            } else {
                ui.intrusionTimerTxt.innerText = `Time remaining: ${gameTimer}s`;
                ui.intrusionProgress.style.width = `${(gameTimer / 15) * 100}%`;
            }
        }

        // --- ACTIVE COOLDOWN DECREMENTER (EVERY SECOND) ---
        let cdUpdated = false;
        for (const k in activeCooldowns) {
            if (activeCooldowns[k] > 0) {
                activeCooldowns[k]--;
                cdUpdated = true;
            }
        }

        // --- ACTIVE BUFFS DECREMENTER ---
        if (activeBuffs.overclock > 0) {
            activeBuffs.overclock--;
            if (activeBuffs.overclock <= 0) {
                ui.showNotification("OVERCLOCK EXPIRED", "CPU compiling speeds normalized.", "warning");
                cdUpdated = true;
            }
        }

        if (cdUpdated || activeBuffs.overclock > 0) {
            ui.renderAiCore(state, activeCooldowns, activateSkillPower);
        }

        // Threat Creep and Reduction Calculations
        let threatCreep = 0;
        threatCreep += (state.upgrades.ddos_bot || 0) * 0.02;
        threatCreep += (state.upgrades.port_scanner || 0) * 0.06;
        threatCreep += (state.upgrades.trojan || 0) * 0.22;
        threatCreep += (state.upgrades.rootkit || 0) * 0.90;

        // Apply passive VPN / proxy shielding
        let netThreatChange = threatCreep - state.threatReduction;

        if (!state.isLockdown) {
            if (netThreatChange !== 0) {
                // Apply bounded net threat change per second
                state.threatPercent = Math.max(0, Math.min(state.maxThreat, state.threatPercent + netThreatChange));
                state.recalculateRates();
                ui.updateStats(state);

                // Trigger lockdown if threat hits maxThreat
                if (state.threatPercent >= state.maxThreat) {
                    state.isLockdown = true;
                    state.recalculateRates();
                    statusBar.classList.add("lockdown-active");
                    
                    ui.showNotification("CRITICAL SEIZURE", "NetWatch tracers have located your server grid!", "alert");
                    ui.showNotification("LOCKDOWN RECOVERY", "Scrub logs in the terminal to evaporate trace routes!", "warning");
                    audio.playAlert();
                    
                    // If a mini-game alert was active, close it
                    if (vulnAlertActive) {
                        ui.vulnWidget.style.display = "none";
                        vulnAlertActive = false;
                    }
                    // If currently playing a mini-game, abort it
                    if (intrusionActive) {
                        intrusionActive = false;
                        ui.winIntrusion.style.display = "none";
                    }

                    ui.updateStats(state);
                    ui.renderShop(state, buyUpgrade);
                    state.save();
                }
            }
        } else {
            // Keep ensuring status bar is flashing red under lockdown
            if (!statusBar.classList.contains("lockdown-active")) {
                statusBar.classList.add("lockdown-active");
            }
        }

        // Passive Generation (PAUSED during lockdown to create high-stakes tension)
        if (!state.isLockdown) {
            if (state.pps > 0) {
                state.loc += state.pps;
                state.totalLocEarned += state.pps;
                ui.updateStats(state);
                
                // Check story triggers
                story.checkTriggers(state);
                
                // Re-render shop as credits or resources grow
                ui.renderShop(state, buyUpgrade);
                ui.renderConquestNodes(state, attackNode);
                ui.renderAiCore(state, activeCooldowns, activateSkillPower);
            }
        }

        // Automatic game saving (every 10s)
        autoSaveTimer++;
        if (autoSaveTimer >= 10) {
            state.save();
            autoSaveTimer = 0;
        }
    }, 1000);
});
