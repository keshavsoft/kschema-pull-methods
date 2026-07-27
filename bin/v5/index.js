import buildStory from './buildStory.js';

const startFunc = ({ filePath, fileContent, inAction = "Crud" }) => {
    switch (inAction) {
        case "Crud":
            const story = buildStory({ filePath, fileContent });

            console.log("story : ", story);

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;