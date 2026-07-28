import buildStory from './buildStory.js';

const startFunc = ({ filePath, fileContent, inAction = "Crud",
    inTargetPath, showLog = false }) => {

    if (showLog) console.log("filePath : ", filePath, inTargetPath, showLog);

    switch (inAction) {
        case "Crud":
            const story = buildStory({ filePath, fileContent, inTargetPath });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;