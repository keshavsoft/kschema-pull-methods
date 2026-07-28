# kschema-pull-methods

> Find backend router methods, endpoint paths, and handler controller functions dynamically from backend source files.

`kschema-pull-methods` is a lightweight, configuration-driven utility designed to extract express-style routing configurations, controller functions, and REST client paths from backend router files (specifically matching `**/end-points.js`).

---

## Features

- 🔍 **Automated Route Discovery**: Scans target files and matches endpoint configurations using customized regular expressions.
- ⚙️ **Modular Pure Functions**: Core processing logic is fully decoupled from static configurations, making the execution pipeline clean and testable.
- ⚡ **Seamless Mapping**: Extracts the exact HTTP method, endpoint name, controller handler name, and REST client target path.
- 📦 **Version-Isolated Runtimes**: Uses a dynamic runner system that dynamically resolves and loads the latest runtime version (currently `v8`).
- 📖 **Story-Driven Architecture**: The execution engine is structured as a clear narrative using modular components of a Scout, a Decipherer, and a Conductor for self-documenting code.

---

## Installation

```bash
npm install kschema-pull-methods
```

---

## Usage

### Programmatic API

Import the default function and invoke it with target options:

```javascript
import load from "kschema-pull-methods";
import extractRegex from "./extractRegex.js";

const story = load({
    // Path to the backend routes file (e.g. end-points.js)
    filePath: "/workspace/api/v1/doctors/end-points.js",
    
    // Content of the routes file
    fileContent: "router.get('/showAll', (req, res) => funcFromshowAll({ req, res }));",
    
    // Base target path to calculate REST client path prefix
    inTargetPath: "/workspace",
    
    // Extracted regex rules matching router and imports configurations
    extractRegex: extractRegex.fromEndPointsJs,
    
    // The action to perform (defaults to "Crud")
    inAction: "Crud"
});

console.log(story);
```

---

## Architecture & Code Story (v8)

In version 8, the codebase behaves like an adventure quest rather than standard dry modules:

1. **The Scout** (`story/scout.js`): Scans the scroll (file content) purely using regex configurations to locate target endpoint lines.
2. **The Decipherer** (`story/decipherer.js`): Interprets each line using patterns to extract the HTTP method, endpoint path, and controller function name.
3. **The Path Finder** (`files/pullEndPoint.js`): Calculates the clean REST client endpoint path from the file path.
4. **The Conductor** (`story/conductor.js`): Directs the journey, orchestrating the Scout, Decipherer, and Path Finder to assemble the final endpoint story.
5. **The Chronicle** (`index.js`): Acts as the main gatekeeper, retrieving target options from the outside and passing them purely down to the Story components.

---

## Local Development & Testing

Clone the repository:
```bash
git clone https://github.com/keshavsoft/kschema-pull-methods.git
cd kschema-pull-methods
npm install
```

To run the local validation tests:
```bash
node test/v10/test.js
```

---

## License

MIT
