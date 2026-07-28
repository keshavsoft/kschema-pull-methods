import patterCollectorAnyJs from "pattern-collector-anyjs";

/**
 * The Scout scans the given scroll (fileContent) looking for specific runes (endpoint routes).
 */
const scoutRunes = ({ fileContent, extractRegex }) => {
    const findings = patterCollectorAnyJs({
        fileContent,
        extractRegex
    });
    return findings?.useLines || [];
};

export default scoutRunes;
