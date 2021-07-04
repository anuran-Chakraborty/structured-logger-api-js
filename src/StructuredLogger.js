const { create, exists } = require("./api");

/**
 * @param  {} url The url where the logger server backend is running
 * @param  {} name The name of the new logspace to be created (This is ignored if the id field is set and the logspace with the id exists
 * @param  {} id=null The id of an exisitng logspace where you want to log
 */
class StructuredLogger {
    constructor(url, name, id = null) {
        this.config = {
            url: url,
            name: name,
            id: id
        };
    }

    async createLogger() {
        // First check if the logger exists by the id
        if (this.config.id) {
            const isExists = await exists(`${this.config.url}/log-spaces`, this.config.id);
            if (isExists.data.message) {
                // The logspace exists so use it
                console.log("The logspace exists using exisiting logspace...");
                return;
            }
        }

        // The logspace does not exist so create one with the name
        const data = { name: this.config.name };
        const logspace = await create(`${this.config.url}/log-spaces`, data);
        this.config.id = logspace.data.logspace._id;
        console.log("The logspace does not exist creating new logspace...");
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