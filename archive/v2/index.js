import fs from 'fs';
import path from 'path';

import nodeFsRec from "node-fs-recursive";
import patterCollectorAnyJs from "pattern-collector-anyjs";

import { scoutTheRealmForTargetJsons } from "./adventure/scout.js";
import trimPaths from "./adventure/trimPaths.js";

import extractRegex from './extractRegex.js';

const fileNameToCompare = "end-points.js";

const startFunc = ({ toPath, inAction = "Crud", inTargetPath }) => {
    switch (inAction) {
        case "Crud":
            const hiddenGems = scoutTheRealmForTargetJsons({
                realmPath: toPath,
                inFileNameToCompare: fileNameToCompare
            });

            const trimmedPathsArray = trimPaths({
                inPathsArray: hiddenGems,
                inTargetPath, inFileNameToCompare: fileNameToCompare
            });

            trimmedPathsArray.forEach(loopHiddenGems => {

                const fileContent = fs.readFileSync(loopHiddenGems.filePath, 'utf8');

                const story = patterCollectorAnyJs({
                    fileContent,
                    extractRegex: extractRegex.fromEndPointsJs
                });

                story?.useLines.forEach(element => {

                    console.log("story : ", loopHiddenGems.trimmedElement, element.poka);
                });

            });

            return trimmedPathsArray;

            break;
        default:
            break;
    }
    return true;
};

export default startFunc;