const DashboardView = {};

/**@param {string[][]} result */
DashboardView.showResult = (result) => {

    if (result.length > 0) {
        DashboardView.clean();
        ViewTools.getSheet('dashboard').getRange(2, 1, result.length, result[0].length).setValues(result);
        return undefined;
    }

    ViewTools.toast('Ningún resultado que mostrar');

}

DashboardView.clean = () => {
    const sheet = ViewTools.getSheet('Dashboard');
    if (sheet.getLastRow() > 2)
        sheet.deleteRows(2, sheet.getLastRow() - 1);
    if (sheet.getLastColumn() > 4)
        sheet.deleteColumns(4, sheet.getLastColumn() - 3);
}