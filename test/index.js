const StructuredLogger = require("../src/StructuredLogger");

Logger = new StructuredLogger("http://localhost:3000", "Logger2", "60e1794b2f34063efc14ed9b")

for (let i = 0; i < 10; i++) {
    Logger.log("ERROR", "Sample test", `Logging ${i}`);
    Logger.log("VERBOSE", "Sample test", `Logging ${i}`);
    Logger.log("WARN", "Sample test", `Logging ${i}`);
}