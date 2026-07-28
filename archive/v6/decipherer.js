import nParts from "pattern-collector-base-regex-n-parts";

const parseRegex3 = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;

const fileNameToCompare = "end-points.js";

function pullEndPointForRestClient({ inFilePath, inTargetPath }) {
    console.log("aaaaaaaaaaaa : ", inFilePath, inTargetPath);

    return inFilePath.replace(inTargetPath, "").replace(/\\/g, "/").replace(`/${fileNameToCompare}`, "");
};


/**
 * The Decipherer interprets a single line to extract the method, endpoint path, and handler function.
 */
const decipherLine = ({ inFilePath, inTargetPath, line }) => {
    const parsed = nParts({
        matchLine: line,
        nParts: 3,
        parseRegex: parseRegex3
    });

    return {
        method: parsed?.part1,
        endPoint: parsed?.part2,
        funcToRun: parsed?.part3,
        forRestClient: pullEndPointForRestClient({ inFilePath, inTargetPath })
    };
};

export default decipherLine;
