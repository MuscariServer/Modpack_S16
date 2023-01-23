function itemID(modName, uniqueID) {
    let shortCut
    switch (modName) {
        case "TP":
            shortCut = "telepastries"
            break;
        case "MM":
            shortCut = "moreminecarts"
            break;
        default:
            shortCut = "modName"
    }
   return `"${shortCut}:${uniqueID}"`;
}