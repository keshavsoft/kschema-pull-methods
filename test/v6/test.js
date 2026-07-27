import path from 'path';
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "api", "v1", "doctors", "end-points.js");

import defaultFunc from '../../index.js';

const k1 = defaultFunc({
    filePath: appJsPath,
    fileContent: fs.readFileSync(appJsPath, "utf8")
});

console.log("ssssssssss : ", JSON.stringify(k1, null, 2));
