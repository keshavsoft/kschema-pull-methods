import buildStory from './buildStory.js';

const startFunc = ({ inEndPointJsFilePath, inAction = "Crud" }) => {
    switch (inAction) {
        case "Crud":
            const story = buildStory({ inEndPointJsFilePath });

            console.log("story : ", story);

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;