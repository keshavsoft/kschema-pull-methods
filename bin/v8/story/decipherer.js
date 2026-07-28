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

    return {
        method: parsed?.part1,
        endPoint: parsed?.part2,
        funcToRun: parsed?.part3,
        forRestClient: pullEndPointForRestClient({ inFilePath, inTargetPath, fileNameToCompare })
    };
};

export default decipherLine;
