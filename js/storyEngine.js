/* --- STORY ENGINE MODULE --- */

class StoryEngine {
    constructor(uiManager) {
        this.ui = uiManager;
    }

    // Evaluates triggers and returns the newly unlocked event ID or null
    checkTriggers(state) {
        // If an event is currently active in the mailbox, don't trigger new ones yet
        if (state.activeEventId) return null;

        for (const event of STORY_EVENTS) {
            // If the event hasn't been completed or activated, and meets trigger conditions
            if (!state.completedEvents.includes(event.id) && event.trigger(state)) {
                state.activeEventId = event.id;
                state.unreadCount = 1;
                
                // Fire notification!
                this.ui.showNotification("INCOMING MESSAGE", `Encrypted transmission from ${event.from}`, "info");
                this.ui.updateCommlinkBadge(state);
                this.ui.renderEmailView(state, event);
                return event.id;
            }
        }
        return null;
    }

    getEventById(id) {
        return STORY_EVENTS.find(e => e.id === id) || null;
    }

    // Resolves a choice made by the player
    resolveChoice(state, eventId, choiceIndex) {
        const event = this.getEventById(eventId);
        if (!event) return;

        const option = event.options[choiceIndex];
        if (!option) return;

        // Execute choice reward/consequence
        option.action(state);

        // Check if there's a subsequent direct narrative event
        if (option.nextEvent) {
            const nextEv = this.getEventById(option.nextEvent);
            if (nextEv) {
                state.activeEventId = nextEv.id;
                state.unreadCount = 1;
                this.ui.showNotification("SECURE LINK UPDATED", `Follow-up from ${nextEv.from}`, "success");
                this.ui.updateCommlinkBadge(state);
                this.ui.renderEmailView(state, nextEv);
                state.recalculateRates();
                state.save();
                return;
            }
        }

        // Otherwise clear active event and save state
        state.activeEventId = null;
        state.unreadCount = 0;
        this.ui.updateCommlinkBadge(state);
        this.ui.clearEmailView();
        
        state.recalculateRates();
        state.save();
        
        this.ui.showNotification("CONNECTION TERMINATED", "Secure tunnel closed.", "warning");
    }
}
