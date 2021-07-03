const { create } = require("./api");

class StructuredLogger {
    constructor(url, name, id = null) {
        this.config = {
            url: url,
            name: name,
            id: id
        };
    }

    createLogger() {
    }

    //Function to log
    async log(level, logtag, message) {
        const data = {
            timestamp: Date.now(),
            logspace_id: this.config.id,
            log_level: level,
            log_tag: logtag,
            log: message
        };
        await create(`${this.config.url}/logs`, data);
    }
}

module.exports = StructuredLogger;