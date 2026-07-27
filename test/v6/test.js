import path from 'path';

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "api", "v1", "doctors", "end-points.js");

import defaultFunc from '../../index.js';

const k1 = defaultFunc({
    inEndPointJsFilePath: appJsPath
});

// console.log("ssssssssss : ", k1);
console.log("ssssssssss : ", k1);
