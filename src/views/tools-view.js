const ViewTools = {};

/**
 * @returns {GoogleAppsScript.Spreadsheet.Spreadsheet}
 */
ViewTools.getActiveSpreadsheet = () => {
    return SpreadsheetApp.getActive();
}

/**
 * 
 * @param {string} sheetName - Sheet name
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} 
 */
ViewTools.getSheet = (sheetName) => {
    return ViewTools.getActiveSpreadsheet().getSheetByName(sheetName);
}

/**
 * 
 * @param {string} message 
 */
ViewTools.toast = (message) => {
    ViewTools.getActiveSpreadsheet().toast(message);
}