/* --- AUDIO MANAGER MODULE --- */

class AudioManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.masterVolume = 0.3;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    // --- SYNTHESIZED SOUNDS ---

    // Simple mechanical key press sound
    playKeyPress() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(150 + Math.random() * 50, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(this.masterVolume * 0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }

    // Success chime (arpeggio)
    playSuccess() {
        if (!this.enabled || !this.ctx) return;
        this.playNote(440, 0, 0.1);
        this.playNote(554.37, 0.1, 0.1);
        this.playNote(659.25, 0.2, 0.3);
    }

    // Failure buzz
    playFailure() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.3);

        gain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }

    // Notification ping
    playNotification() {
        if (!this.enabled || !this.ctx) return;
        this.playNote(880, 0, 0.1, 'sine');
    }

    // Alert / Alarm (Lockdown)
    playAlert() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.5);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 1.0);
        osc.loop = true;

        gain.gain.setValueAtTime(this.masterVolume * 0.8, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.0);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 1.0);
    }

    // Helper to play a single note
    playNote(freq, delay, duration, type = 'square') {
        if (!this.enabled || !this.ctx) return; // Check if audio is enabled!
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + delay + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
    }
}
