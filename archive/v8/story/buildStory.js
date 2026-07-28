import constructStories from './conductor.js';

const buildStory = ({ filePath, fileContent, inTargetPath, parseRegex, fileNameToCompare, extractRegex }) => {
    return constructStories({ filePath, fileContent, inTargetPath, parseRegex, fileNameToCompare, extractRegex });
};

export default buildStory;
