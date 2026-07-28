import scoutRunes from './scout.js';
import decipherLine from './decipherer.js';

/**
 * The Conductor orchestrates the Scout and the Decipherer to construct the final Endpoint stories.
 */
const constructStories = ({ filePath, fileContent, inTargetPath }) => {
    const rawLines = scoutRunes(fileContent);
    const storyOfEndPoint = [];

    rawLines.forEach(element => {
        const details = decipherLine({
            inFilePath: filePath,
            inTargetPath, line: element.line
        });

        storyOfEndPoint.push({
            filePath,
            line: element.line,
            lineNumber: element.lineNumber,
            funcToRun: details.funcToRun,
            endPoint: details.endPoint,
            method: details.method,
            forRestClient: details?.forRestClient
        });
    });

    return storyOfEndPoint;
};

export default constructStories;
