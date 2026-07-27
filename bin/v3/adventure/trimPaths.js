function startFunc({ inPathsArray, inTargetPath, inFileNameToCompare }) {
    const trimmedPathsArray = inPathsArray.map(element => {
        return {
            element,
            filePath: element,
            trimmedElement: element.replace(inTargetPath, "").replace(/\\/g, "/").replace(`/${inFileNameToCompare}`, "")
        };
    });

    return trimmedPathsArray;
}

export default startFunc;
