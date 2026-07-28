import fs from 'fs';

import patterCollectorAnyJs from "pattern-collector-anyjs";
import nParts from "pattern-collector-base-regex-n-parts";

import extractRegex from './extractRegex.js';

const parseRegex3 = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;

const startFunc = ({ filePath, fileContent }) => {
    const storyOfEndPoint = [];

    const story = patterCollectorAnyJs({
        fileContent,
        extractRegex: extractRegex.fromEndPointsJs
    });

    // console.log("story : ", story.useLines);

    story?.useLines.forEach(element => {
        const fromNParts = nParts({
            matchLine: element.line, nParts: 3,
            parseRegex: parseRegex3
        });

        // console.log("fromNParts : ", fromNParts);
        storyOfEndPoint.push({
            filePath,
            line: element.line,
            lineNumber: element.lineNumber,
            funcToRun: fromNParts?.part3,
            endPoint: fromNParts?.part2,
            method: fromNParts?.part1
        });
        // console.log("story : ", loopHiddenGems.trimmedElement, element.poka);

    });

    // console.log("storyOfEndPoint : ", storyOfEndPoint);

    return storyOfEndPoint;
};

export default startFunc;