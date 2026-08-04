import path from "path";

import { pullEndPointForRestClient } from "../files/pullEndPoint.js";

/**
 * The Decipherer interprets a single line to extract the method, endpoint path, and handler function.
 */
const decipherLine = ({ part1, part2, part3, inFilePath, inTargetPath, fileNameToCompare = "" }) => {
    let returnObject = {};

    returnObject.method = part1;
    returnObject.endPoint = part2;
    returnObject.funcToRun = part3;
    returnObject.forRestClient = pullEndPointForRestClient({ inFilePath, inTargetPath, fileNameToCompare });
    returnObject.forRestClientFull = `${returnObject.forRestClient}/${returnObject.endPoint}`;

    return returnObject;
};

export default decipherLine;
