class EventEmitter {
    constructor() {
        this.events = {}; // { eventName: [callbacks] }
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName]
                    .filter(cb => cb !== callback);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        const results = [];

        for (let cb of this.events[eventName]) {
            results.push(cb(...args));
        }

        return results;
    }
}
