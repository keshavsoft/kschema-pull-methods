import constructStories from './conductor.js';

const buildStory = ({ fileContent, inTargetPath, parseRegex, fileNameToCompare, fileType, filePath }) => {
    return constructStories({ fileContent, inTargetPath, parseRegex, fileNameToCompare, fileType, filePath });
};

export default buildStory;
