import buildStory from './story/buildStory.js';
import extractRegex from './extractRegex.js';

const startFunc = ({ filePath, fileContent, inAction = "Crud",
    inTargetPath, showLog = false }) => {

    if (showLog) console.log("filePath : ", filePath, inTargetPath, showLog);

    switch (inAction) {
        case "Crud":
            const parseRegex3 = extractRegex.fromEndPointsJs.consumptionRegex.parseRegex3;
            const fileNameToCompare = "end-points.js";

            const story = buildStory({
                filePath,
                fileContent,
                inTargetPath,
                parseRegex: parseRegex3,
                fileNameToCompare,
                extractRegex: extractRegex.fromEndPointsJs
            });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;