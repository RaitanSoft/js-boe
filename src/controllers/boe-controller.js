function searchBOE() {
    const term = SpreadsheetApp.getActive().getActiveSheet().getRange('A1').getValue();
    const result = BOEService.search(term);

    DashboardView.showResult(result);

}

function searchBOPA() {
    const term = SpreadsheetApp.getActive().getActiveSheet().getRange('A1').getValue();
    const result = BOPAService.search(term);

    DashboardView.showResult(result);

}