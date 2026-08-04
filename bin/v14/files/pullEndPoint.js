const pullEndPointForRestClient = ({ inFilePath, inTargetPath, fileNameToCompare }) => {
    // const firstStep = inFilePath.replace(inTargetPath, "");
    // const secondStep = firstStep.replace(/\\/g, "/");
    // const k1 = firstStep.replace(fileNameToCompare, "");
    // const k2 = k1.replace(/\\/g, "/");

    // console.log("dddddddddd : ", fileNameToCompare, k1, k2, firstStep, secondStep);

    // return secondStep.replace(`/${fileNameToCompare}`, "");
    const firstStep = inFilePath.replace(inTargetPath, "");
    const secondStep = firstStep.replace(fileNameToCompare, "");
    const thirdStep = secondStep.replace(/\\/g, "/");

    return thirdStep;
};

export { pullEndPointForRestClient };
