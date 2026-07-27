import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

const load = ({ filePath, fileContent, inAction }) => {

    return latestModule.default({ filePath, fileContent, inAction });

};

export default load;