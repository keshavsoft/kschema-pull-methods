import { scoutTheRealmForTargetJsons } from "./adventure/scout.js";
import trimPaths from "./adventure/trimPaths.js";

import buildStory from './buildStory.js';

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

            const story = buildStory({ inTrimmedPathsArray: trimmedPathsArray });

            return story;

            break;
        default:
            break;
    };

    return true;
};

export default startFunc;