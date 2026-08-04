import patterCollectorAnyJs from "pattern-collector-anyjs-story";

// import scoutRunes from './scout.js';
import decipherLine from './decipherer.js';

/**
 * The Conductor orchestrates the Scout and the Decipherer to construct the final Endpoint stories.
 */
const constructStories = ({ filePath, fileContent, inTargetPath, parseRegex, fileNameToCompare, fileType }) => {
    const rawLines = patterCollectorAnyJs({ fileContent, fileType });
    const storyOfEndPoint = [];

    rawLines?.linesStory?.useLines?.forEach(element => {
        const details = decipherLine({
            part1: element?.part1,
            part2: element?.part2,
            part3: element?.part3,
            inFilePath: filePath,
            inTargetPath,
            line: element.line,
            parseRegex,
            fileNameToCompare
        });

        storyOfEndPoint.push({
            filePath,
            line: element.line,
            lineNumber: element.lineNumber,
            funcToRun: details.funcToRun,
            endPoint: details.endPoint,
            method: details.method,
            forRestClient: details?.forRestClient,
            forRestClientFull: details?.forRestClientFull
        });
    });

    return storyOfEndPoint;
};

export default constructStories;
