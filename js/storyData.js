/* --- STORY DATA AND EVENT TREE (LOCALIZED) --- */

const STORY_EVENTS = [
    {
        id: "intro_msg",
        from: "Cipher",
        subject: "CRYPT_HANDSHAKE: Proposal",
        trigger: (state) => state.credits >= 10 && !state.completedEvents.includes("intro_msg"),
        text: (state) => state.language === "fr" ?
            `J'ai surveillé ton sous-réseau. Ta syntaxe est étonnamment propre pour un script-kiddie. 
            <br><br>
            J'ai un petit boulot pour toi : décrypter une porte dérobée de base de données pour une chaîne pharmaceutique locale. Ils gonflent le prix de l'insuline. J'ai besoin de quelqu'un pour télécharger leurs registres comptables. 
            <br><br>
            La prime est de ฿50.00. Gros gains, faible risque. T'es partant, fantôme ?` :
            `I've been monitoring your subnet. Your syntax is surprisingly clean for a script-kiddie. 
            <br><br>
            I have a minor job for you: decrypting a database backdoor for a local pharmaceutical company. They've been inflating insulin prices. I need someone to download their accounts logs. 
            <br><br>
            Pay is ฿50.00. High rewards, low risk. You in, ghost?`,
        options: [
            {
                text: (state) => state.language === "fr" ? 
                    "[ACCEPTER] Télécharger les registres (+฿50.0, +15% Menace)" :
                    "[ACCEPT] Download accounts logs (+฿50.0, +15% Threat)",
                action: (state) => {
                    state.credits += 50.0;
                    state.totalCreditsEarned += 50.0;
                    state.threatPercent += 15;
                    state.completedEvents.push("intro_msg");
                    state.completedEvents.push("intro_msg_accept");
                },
                nextEvent: "cipher_success"
            },
            {
                text: (state) => state.language === "fr" ?
                    "[REFUSER] Trop risqué pour des miettes (Sécurisé)" :
                    "[DECLINE] Too risky for pennies (No rewards, Secure)",
                action: (state) => {
                    state.completedEvents.push("intro_msg");
                    state.completedEvents.push("intro_msg_decline");
                },
                nextEvent: "cipher_decline"
            }
        ]
    },
    {
        id: "cipher_success",
        from: "Cipher",
        subject: "JOB_DONE: Good stuff",
        trigger: (state) => state.completedEvents.includes("intro_msg_accept") && !state.completedEvents.includes("cipher_success"),
        text: (state) => state.language === "fr" ?
            `Bon boulot. Le client a récupéré les registres bruts, et le groupe pharmaceutique va devoir faire face à des audits inattendus.
            <br><br>
            Voici tes ฿50.00. Continue d'étendre ton réseau. Achète plus de Bots DDoS et de Scanners de port. On se reparle dès que tu auras une puissance de calcul digne de ce nom.` :
            `Nice work. The client got the raw financial logs, and the pharmaceutical group has some "unexplained audits" to deal with now.
            <br><br>
            Here is your ฿50.00. Keep expanding your network. Buy more DDoS bots and port scanners. We will speak again once you have some serious processing power.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[RÉPONDRE] Bien reçu. Poursuite des opérations." : "[REPLY] Understood. Scanning continues.",
                action: (state) => {
                    state.completedEvents.push("cipher_success");
                }
            }
        ]
    },
    {
        id: "cipher_decline",
        from: "Cipher",
        subject: "SAFE_PLAY: Cautious",
        trigger: (state) => state.completedEvents.includes("intro_msg_decline") && !state.completedEvents.includes("cipher_decline"),
        text: (state) => state.language === "fr" ?
            `Prudent. J'aime ça. Une vie longue est une vie ennuyeuse, mais sécurisée.
            <br><br>
            Toutefois, tu as manqué des crédits faciles. Pas de problème. L'offre tient toujours pour les prochains coups, mais seulement si tu augmentes ta puissance réseau. Continue de coder.` :
            `Cautious. I like that. A long life is a boring life, but a safe one. 
            <br><br>
            Still, you missed some easy crypto-credits. No matter. The offer stands for future gigs, but only if you grow your network compute. Keep writing code.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[RÉPONDRE] Reçu. Je reste discret." : "[REPLY] Copy that. Staying low-key.",
                action: (state) => {
                    state.completedEvents.push("cipher_decline");
                }
            }
        ]
    },
    {
        id: "megacorp_offer",
        from: "Apex_Corp_HR",
        subject: "BOUNTY_OFFER: IP Flagged",
        trigger: (state) => state.credits >= 150 && !state.completedEvents.includes("megacorp_offer"),
        text: (state) => state.language === "fr" ?
            `Attention développeur. Nos sous-programmes de sécurité ont enregistré votre passerelle en train de scanner nos pare-feu d'entreprise.
            <br><br>
            Plutôt que de déployer une équipe physique ou un procès, nous souhaitons louer votre talent unique. Une start-up rivale, "BioSynthetix", a développé un brevet dont nous avons besoin. Écrivez un script de bypass silencieux pour pénétrer leur sous-réseau.
            <br><br>
            Nous vous paierons ฿300.00. Ou vous pourriez les avertir... mais l'argent des start-ups est toujours mince. Choisissez judicieusement.` :
            `Attention developer. Our security sub-routines logged your gateway scanning our corporate firewall vectors. 
            <br><br>
            Rather than dispatching physical security or a lawsuit, we'd like to hire your unique talent. A rival startup, "BioSynthetix", has developed a patent we need. Write a silent bypass script to penetrate their subnet. 
            <br><br>
            We will pay you ฿300.00. Or you could tipped them off... but startup money is always thin. Choose wisely.`,
        options: [
            {
                text: (state) => state.language === "fr" ?
                    "[ACCEPTER] Aider Apex Corp (+฿300.0, +25% Menace)" :
                    "[ACCEPT] Help Apex Corp (+฿300.0, +25% Threat)",
                action: (state) => {
                    state.credits += 300.0;
                    state.totalCreditsEarned += 300.0;
                    state.threatPercent += 25;
                    state.completedEvents.push("megacorp_offer");
                    state.completedEvents.push("apex_helped");
                },
                nextEvent: "apex_deal"
            },
            {
                text: (state) => state.language === "fr" ?
                    "[AVERTIR] Prévenir la Start-up BioSynthetix (+฿100.0, -10% Menace)" :
                    "[WARN] Tip off the Startup BioSynthetix (+฿100.0, -10% Threat)",
                action: (state) => {
                    state.credits += 100.0;
                    state.totalCreditsEarned += 100.0;
                    state.threatPercent = Math.max(0, state.threatPercent - 10);
                    state.completedEvents.push("megacorp_offer");
                    state.completedEvents.push("startup_saved_choice");
                },
                nextEvent: "startup_saved"
            }
        ]
    },
    {
        id: "apex_deal",
        from: "Apex_Corp_HR",
        subject: "TRANSACTION: Patent Extracted",
        trigger: (state) => state.completedEvents.includes("apex_helped") && !state.completedEvents.includes("apex_deal"),
        text: (state) => state.language === "fr" ?
            `Bypass réussi. La base de données des brevets a été copiée et nettoyée de leurs serveurs.
            <br><br>
            Vos crédits ont été virés. Cependant, vous devez savoir que les agents de NetWatch ont commencé à tracer activement votre cluster IP. Restez sur vos gardes, ou achetez des effaceurs de logs rapidement.` :
            `Bypass successful. Patent database has been copied and scrubbed from their servers. 
            <br><br>
            Your credits have been wired. However, you should know that NetWatch agents have begun a packet-trace on your IP cluster. Keep your guard up, or buy log-cleaners soon.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[FERMER LA CONNEXION]" : "[CLOSE CONNECTION]",
                action: (state) => {
                    state.completedEvents.push("apex_deal");
                }
            }
        ]
    },
    {
        id: "startup_saved",
        from: "BioSynthetix_Sec",
        subject: "SEC_ALERT: Integrity Rewarded",
        trigger: (state) => state.completedEvents.includes("startup_saved_choice") && !state.completedEvents.includes("startup_saved"),
        text: (state) => state.language === "fr" ?
            `À l'expéditeur anonyme : Nous avons bien reçu votre rapport de télémétrie réseau. Apex Corp préparait bien un assaut Zero-day sur notre serveur principal.
            <br><br>
            Grâce à votre alerte, nous avons appliqué le correctif à temps. En tant que groupe médical à but non lucratif, nous ne pouvons pas rivaliser avec les budgets d'Apex, mais nous vous avons viré ฿100.00 en signe de gratitude. Nous avons aussi masqué votre serveur proxy.` :
            `To the anonymous sender: We received your network telemetry report. Apex Corp was indeed preparing a Zero-day assault on our primary server.
            <br><br>
            Thanks to your log audit, we patched the vulnerability in time. As a non-profit medical group, we cannot match corporate greed, but we wired ฿100.00 as a token of our deepest gratitude. We've also masked your proxy server.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[EFFACER LES LOGS] Ravi d'avoir pu aider." : "[DELETE LOGS] Glad to help.",
                action: (state) => {
                    state.completedEvents.push("startup_saved");
                }
            }
        ]
    },
    {
        id: "netwatch_warning",
        from: "System_Daemon",
        subject: "!! CRITICAL INTRUSION DETECTED !!",
        trigger: (state) => state.threatPercent >= 35 && !state.completedEvents.includes("netwatch_warning"),
        text: (state) => state.language === "fr" ?
            `** ATTENTION ** La division de cyber-sécurité NetWatch a identifié la signature de votre serveur passerelle.
            <br><br>
            Votre niveau de menace numérique grimpe rapidement. Des cyber-escouades de police tentent de tracer vos coordonnées géographiques. Vous devez immédiatement purger vos serveurs.
            <br><br>
            Une agence de nettoyage de proxies sur le darknet vous propose d'effacer vos métadonnées pour ฿180.00. Si vous ne pouvez pas payer, votre profil de risque va exploser.` :
            `** WARNING ** NetWatch Cyber-Security division has identified your server gateway signature. 
            <br><br>
            Your digital threat rating is mounting rapidly. Cyber-crime squads are attempting to trace your geographic coordinates. You must act to scrub your logs immediately.
            <br><br>
            A proxy-scrubbing agency on the darknet offers to wipe your metadata for ฿180.00. If you cannot pay, your risk profile will skyrocket.`,
        options: [
            {
                text: (state) => state.language === "fr" ?
                    "[PAYER] Nettoyer les serveurs (-฿180.00, Réinitialise Menace à 5%)" :
                    "[PAY] Wipe server logs (-฿180.00, Reset Threat to 5%)",
                action: (state) => {
                    if (state.credits >= 180.0) {
                        state.credits -= 180.0;
                        state.threatPercent = 5;
                        state.completedEvents.push("netwatch_warning");
                        state.completedEvents.push("netwatch_paid");
                    } else {
                        state.threatPercent += 20;
                        state.completedEvents.push("netwatch_warning");
                        state.completedEvents.push("netwatch_ignored_broke");
                    }
                },
                nextEvent: "clean_slate"
            },
            {
                text: (state) => state.language === "fr" ?
                    "[IGNORER] Qu'ils essaient de m'attraper (+20% Menace)" :
                    "[IGNORE] Let them try to find me (+20% Threat)",
                action: (state) => {
                    state.threatPercent += 20;
                    state.completedEvents.push("netwatch_warning");
                    state.completedEvents.push("netwatch_ignored");
                },
                nextEvent: "dangerous_waters"
            }
        ]
    },
    {
        id: "clean_slate",
        from: "System_Daemon",
        subject: "SYS_MAINTENANCE: Safe",
        trigger: (state) => (state.completedEvents.includes("netwatch_paid") || state.completedEvents.includes("netwatch_ignored_broke")) && !state.completedEvents.includes("clean_slate"),
        text: (state) => {
            if (state.language === "fr") {
                return state.completedEvents.includes("netwatch_paid") ? 
                    `Logs de serveur nettoyés. Coordonnées de machine virtuelle modifiées. Vous êtes à nouveau un fantôme. Excellente décision tactique.` :
                    `Le nettoyage a ÉCHOUÉ par manque de crédits sur votre portefeuille. Vos fichiers n'ont pas été blanchis et l'exposition se poursuit. Votre menace a grimpé !`;
            } else {
                return state.completedEvents.includes("netwatch_paid") ? 
                    `Server logs cleared. Virtual machine coordinates rotated. You are once again a ghost. Excellent tactical decision.` :
                    `Scrubbing FAILED due to insufficient credits. Your files were not cleared, and the scan continues! Your threat profile has spiked.`;
            }
        },
        options: [
            {
                text: (state) => state.language === "fr" ? "[CONTINUER]" : "[CONTINUE]",
                action: (state) => {
                    state.completedEvents.push("clean_slate");
                }
            }
        ]
    },
    {
        id: "dangerous_waters",
        from: "Cipher",
        subject: "CYBER_WARFARE: Living on the edge",
        trigger: (state) => state.completedEvents.includes("netwatch_ignored") && !state.completedEvents.includes("dangerous_waters"),
        text: (state) => state.language === "fr" ?
            `Tu as choisi de narguer NetWatch. Geste audacieux, ou suicidaire. Ils mènent une traque active de tes flux.
            <br><br>
            Si ton niveau de menace atteint son maximum, ils gèleront ta connexion et bloqueront tes crédits. Je te conseille d'acheter de meilleurs Rootkits pour masquer tes processus de fond, ou de garder un budget serré pour effacer tes logs si ça chauffe.` :
            `You chose to mock NetWatch. Bold move, or suicidal. They are running active traceroute ping verves. 
            <br><br>
            If your threat level hits 80%, they'll freeze your connection and block asset withdrawals. I suggest buying higher level Rootkits to hide your background processes, or keep a tight budget to wipe logs if things get hot.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[RÉPONDRE] Le danger est mon compilateur." : "[REPLY] Danger is my compiler.",
                action: (state) => {
                    state.completedEvents.push("dangerous_waters");
                }
            }
        ]
    },
    {
        id: "the_big_heist",
        from: "Cipher",
        subject: "THE_BIG_HEIST: Corporate Apocalypse",
        trigger: (state) => state.credits >= 1200 && state.upgrades.rootkit >= 1 && !state.completedEvents.includes("the_big_heist"),
        text: (state) => state.language === "fr" ?
            `Nous y sommes. Le coup ultime. Les serveurs maîtres d'Apex Corp ont une fenêtre de maintenance synchronisée ce soir.
            <br><br>
            J'ai récupéré l'exploit root, mais j'ai besoin de tout ton botnet pour saturer leurs serveurs de secours pendant la phase d'encryptage. Si on réussit, on partage une prime phénoménale de ฿2,000.00.
            <br><br>
            Mais l'échec signifie un bannissement instantané et la cyber-police à ta porte. Si tu as peur, tu peux aussi nous dénoncer à NetWatch Security pour une prime légale de ฿500.00.
            <br><br>
            Quel est ton choix, opérateur ?` :
            `This is it. The ultimate score. Apex Corp's core server mainframes have a synchronized maintenance window tonight. 
            <br><br>
            We've got the root exploit, but we need your entire botnet to suppress their backup servers during the encryption phase. If we pull this off, we get ฿2,000.00 split. 
            <br><br>
            But failure means instant blacklisting and NetWatch lock-down. Alternatively, if you are a coward, you could snitch to NetWatch Security for a small bounty of ฿500.00. 
            <br><br>
            What is your path, operator?`,
        options: [
            {
                text: (state) => state.language === "fr" ?
                    "[LE CASSE] Déployer le botnet. Brûler Apex Corp. (+฿2000.0, +50% Menace)" :
                    "[HEIST] Deploy botnet. Burn down Apex. (+฿2000.0, +50% Threat)",
                action: (state) => {
                    state.credits += 2000.0;
                    state.totalCreditsEarned += 2000.0;
                    state.threatPercent += 50;
                    state.completedEvents.push("the_big_heist");
                    state.completedEvents.push("heist_executed");
                },
                nextEvent: "heist_victory"
            },
            {
                text: (state) => state.language === "fr" ?
                    "[BALANCE] Envoyer l'IP de Cipher à NetWatch (+฿500.0, Nettoie Menace)" :
                    "[SNITCH] Send Cipher's gateway IP to NetWatch (+฿500.0, Clear Threat)",
                action: (state) => {
                    state.credits += 500.0;
                    state.totalCreditsEarned += 500.0;
                    state.threatPercent = 0;
                    state.completedEvents.push("the_big_heist");
                    state.completedEvents.push("heist_snitched");
                },
                nextEvent: "snitch_ending"
            }
        ]
    },
    {
        id: "heist_victory",
        from: "Cipher",
        subject: "LEGEND_STATUS: Victory",
        trigger: (state) => state.completedEvents.includes("heist_executed") && !state.completedEvents.includes("heist_victory"),
        text: (state) => state.language === "fr" ?
            `LES SERVEURS MAÎTRES D'APEX CORP ONT CRASHÉ !
            <br><br>
            Tous les comptes sont encryptés. Leurs actions chutent à zéro. Nous avons réussi à transférer ฿2,000.00 sur ton cyber-wallet avant que la connexion ne soit coupée.
            <br><br>
            Tu as réussi. Tu es officiellement une légende d'élite du cyber-espace. Ton pseudo est gravé dans l'histoire.
            <br><br>
            <strong>Félicitations, Cyber-Ghost. Tu as gagné le jeu !</strong> Tu peux continuer à jouer ou effacer ton profil pour tester d'autres embranchements.` :
            `APEX CORP CORE HAS CRASHED!
            <br><br>
            All accounts encrypted. Their shares are falling through the floor. We managed to wire ฿2,000.00 into your cold-storage cyber wallet before the network connection dropped.
            <br><br>
            You did it. You are officially an elite hacker legend. Every terminal on the globe knows your handle. 
            <br><br>
            <strong>Congratulations, Cyber-Ghost. You won the game!</strong> Feel free to continue playing or clear save to try other narrative paths.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[VICTOIRE] Sortir de la matrice en roi." : "[WIN] Exit matrix as a king.",
                action: (state) => {
                    state.completedEvents.push("heist_victory");
                }
            }
        ]
    },
    {
        id: "snitch_ending",
        from: "NetWatch_HQ",
        subject: "CASE_CLOSED: Threat Neutralized",
        trigger: (state) => state.completedEvents.includes("heist_snitched") && !state.completedEvents.includes("snitch_ending"),
        text: (state) => state.language === "fr" ?
            `À l'opérateur : Nous avons bien reçu votre fichier de télémétrie contenant les coordonnées de passerelle maître de Cipher.
            <br><br>
            Nos forces d'assaut tactiques ont perquisitionné leur centre serveur dans le Secteur 4. La cellule a été entièrement démantelée.
            <br><br>
            Comme promis, ฿500.00 ont été virés sur votre compte. Votre dossier criminel a été entièrement purgé. Vous êtes en sécurité totale. Le milieu des hackers vous considérera comme un traître à jamais, mais vous avez préservé votre vie et votre liberté.
            <br><br>
            <strong>Félicitations ! Vous avez terminé le chemin légal sécurisé.</strong> Vous pouvez continuer de jouer ou réinitialiser votre profil pour explorer d'autres options.` :
            `To Operator: We received your telemetry file containing Cipher's master gateway IP coordinates. 
            <br><br>
            Our SWAT net-crime tactical teams raided their server facility in Sector 4. The underground cell has been completely dismantled. 
            <br><br>
            As promised, ฿500.00 has been wired to your bank. Your personal file has been wiped of all cyber-crimes. You are fully secure. Hacking cells may brand you a traitor forever, but you have your life and your freedom.
            <br><br>
            <strong>Congratulations! You completed the secure legal path.</strong> Feel free to continue playing or wipe progress to explore other options.`,
        options: [
            {
                text: (state) => state.language === "fr" ? "[FIN] Prendre la prime et vivre en paix." : "[WIN] Take the payout and live peacefully.",
                action: (state) => {
                    state.completedEvents.push("snitch_ending");
                }
            }
        ]
    },
    {
        id: "creator_msg",
        from: "LoikH (Architect)",
        subject: "SYS_MESSAGE: External Handshake",
        trigger: (state) => state.credits >= 60 && !state.completedEvents.includes("creator_msg"),
        text: (state) => state.language === "fr" ?
            `Salut opérateur ! Je suis LoikH, l'architecte système derrière ce logiciel CyberOS. 
            <br><br>
            J'espère que tu prends du plaisir à infiltrer les sous-réseaux corporatifs et à esquiver les traceurs de NetWatch. Ce jeu est entièrement gratuit et indépendant. 
            <br><br>
            Si tu aimes mon travail et souhaites soutenir le développement de futures mises à jour (ou m'offrir un café !), n'hésite pas à laisser un petit pourboire sur ma page Itch.io. Un énorme merci pour ton temps et ton soutien !` :
            `Hi operator! I am LoikH, the system architect behind this CyberOS software.
            <br><br>
            I hope you are having a blast hacking corporate subnetworks and dodging NetWatch cyber-police tracers. This game is 100% free and independent.
            <br><br>
            If you enjoy my work and want to help support future updates (or buy me a coffee!), please consider leaving a small tip on my Itch.io support page. Thank you so much for your time and help!`,
        options: [
            {
                text: (state) => state.language === "fr" ?
                    "[SOUTENIR LOIKH (ITCH.IO)]" :
                    "[SUPPORT LOIKH (DONATE)]",
                action: (state) => {
                    window.open("https://loikh.itch.io/cyber-hack-tycoon", "_blank");
                    state.completedEvents.push("creator_msg");
                }
            },
            {
                text: (state) => state.language === "fr" ?
                    "[EFFACER LE MESSAGE] Connexion fermée." :
                    "[DELETE EMAIL] Connection closed.",
                action: (state) => {
                    state.completedEvents.push("creator_msg");
                }
            }
        ]
    }
];
