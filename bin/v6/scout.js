import patterCollectorAnyJs from "pattern-collector-anyjs";
import extractRegex from './extractRegex.js';

/**
 * The Scout scans the given scroll (fileContent) looking for specific runes (endpoint routes).
 */
const scoutRunes = (fileContent) => {
    const findings = patterCollectorAnyJs({
        fileContent,
        extractRegex: extractRegex.fromEndPointsJs
    });
    return findings?.useLines || [];
};

export default scoutRunes;
