import buildStory from './story/buildStory.js';

const startFunc = ({ fileContent, inAction = "Crud",
    inTargetPath, filePath, fileType }) => {

    switch (inAction) {
        case "Crud":
            const story = buildStory({
                fileContent, filePath,
                inTargetPath,
                fileType
            });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;