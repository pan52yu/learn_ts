const replaceImagesFileSourceWithInlineRepresentation = (
    htmlData: string,
    imageSrcs: string | any[],
    imagesHexSources: string | any[],
    isBase64Data = true
) => {
    if (imageSrcs.length === imagesHexSources.length) {
        for (let i = 0; i < imageSrcs.length; i++) {
            const newSrc = isBase64Data
                ? `data:${imagesHexSources[i].type};base64,${_convertHexToBase64(imagesHexSources[i].hex)}`
                : imagesHexSources[i]

            htmlData = htmlData.replace(imageSrcs[i], newSrc)
        }
    }

    return htmlData
}
const _convertHexToBase64 = a => {}
