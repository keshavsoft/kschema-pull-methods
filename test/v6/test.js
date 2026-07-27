import path from "path";
import load from "../../index.js";
import fs from "fs";

const fromNpm = load({
    toPath: path.join(process.cwd(), "api"),
    inTargetPath: process.cwd()
});

console.log("aaaaaaaaaa : ", fromNpm);
