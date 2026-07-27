import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

const load = ({ filePath, fileContent, inAction, inTargetPath }) => {

    return latestModule.default({ filePath, fileContent, inAction, inTargetPath });

};

export default load;