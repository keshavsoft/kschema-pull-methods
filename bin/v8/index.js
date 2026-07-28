import buildStory from './story/buildStory.js';

const startFunc = ({ filePath, fileContent, inAction = "Crud",
    inTargetPath, showLog = false, extractRegex }) => {

    if (showLog) console.log("filePath : ", filePath, inTargetPath, showLog);

    switch (inAction) {
        case "Crud":
            const parseRegex3 = extractRegex.consumptionRegex.parseRegex3;
            const fileNameToCompare = "end-points.js";

            const story = buildStory({
                filePath,
                fileContent,
                inTargetPath,
                parseRegex: parseRegex3,
                fileNameToCompare,
                extractRegex: extractRegex
            });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;