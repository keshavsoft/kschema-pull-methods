import fs from "fs";
import path from 'path';

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "api", "v1", "doctors", "end-points.js");
const fileContent = fs.readFileSync(appJsPath, 'utf8');

import defaultFunc from '../../index.js';
import extractRegex from './extractRegex.js';

const k1 = defaultFunc({
    filePath: appJsPath, fileContent,
    inTargetPath: __dirname,
    extractRegex: extractRegex.fromEndPointsJs
});

// console.log("ssssssssss : ", k1);
console.log("ssssssssss : ", k1[0]);
console.log("ssssssssss : ", Object.keys(k1[0]));
