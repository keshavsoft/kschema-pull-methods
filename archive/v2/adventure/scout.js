import nodeFsRec from "node-fs-recursive";

function scoutTheRealmForTargetJsons({ realmPath, inFileNameToCompare }) {
    const targetGems = nodeFsRec({
        folderPath: realmPath,
        fileNameToFilter: inFileNameToCompare
    });

    // return targetGems.map(gem => path.join(realmPath, gem));
    return targetGems;
};

export { scoutTheRealmForTargetJsons };
