# structured-logger-api-js

This is the API to log to StructuredLogger at: https://github.com/anuran-Chakraborty/structured-logger.

Sample code on how to use the logger:

```
const StructuredLogger = require("StructuredLogger");

Logger = new StructuredLogger("URL of backend service [by default port 3000]", "Name of the log space", "Id of an existing logspace");
Logger.log("ERROR", "Sample test", `Logging ${i}`);
```
