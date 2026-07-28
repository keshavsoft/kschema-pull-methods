import path from "path";

import nParts from "pattern-collector-base-regex-n-parts";
import { pullEndPointForRestClient } from "../files/pullEndPoint.js";

/**
 * The Decipherer interprets a single line to extract the method, endpoint path, and handler function.
 */
const decipherLine = ({ inFilePath, inTargetPath, line, parseRegex, fileNameToCompare }) => {
    const parsed = nParts({
        matchLine: line,
        nParts: 3,
        parseRegex
    });

    let returnObject = {};

    returnObject.method = parsed?.part1;
    returnObject.endPoint = parsed?.part2;
    returnObject.funcToRun = parsed?.part3;
    returnObject.forRestClient = pullEndPointForRestClient({ inFilePath, inTargetPath, fileNameToCompare });
    returnObject.forRestClientFull = `${returnObject.forRestClient}/${returnObject.endPoint}`;

    // console.log("returnObject :", returnObject);

    return returnObject;
};

export default decipherLine;
