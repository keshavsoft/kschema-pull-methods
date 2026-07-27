import buildStory from './buildStory.js';

const startFunc = ({ inEndPointJsFilePath, inAction = "Crud" }) => {
    switch (inAction) {
        case "Crud":
            const story = buildStory({ inEndPointJsFilePath });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;