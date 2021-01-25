function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('Boletines')
        .addSubMenu(submenuBOE())
        .addSubMenu(submenuBOPA())
        .addToUi();
}

function submenuBOE() {
    return SpreadsheetApp.getUi()
        .createMenu('BOE')
        .addItem('Buscar', 'searchBOE');
}

function submenuBOPA() {
    return SpreadsheetApp.getUi()
        .createMenu('BOPA')
        .addItem('Buscar', 'searchBOPA');
}