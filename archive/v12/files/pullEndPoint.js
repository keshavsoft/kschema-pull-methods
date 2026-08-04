const pullEndPointForRestClient = ({ inFilePath, inTargetPath, fileNameToCompare }) => {
    return inFilePath.replace(inTargetPath, "").replace(/\\/g, "/").replace(`/${fileNameToCompare}`, "");
};

export { pullEndPointForRestClient };
