import patterCollectorAnyJs from "pattern-collector-anyjs-story";

/**
 * The Scout scans the given scroll (fileContent) looking for specific runes (endpoint routes).
 */
const scoutRunes = ({ fileContent, fileType }) => {
    const story = patterCollectorAnyJs({
        fileContent,
        fileType
    });

    return findings?.useLines || [];
};

export default scoutRunes;
