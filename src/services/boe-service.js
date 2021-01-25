const BOEService = {
    url_base_boe: 'https://www.boe.es',
};

/** 
 * @param {string} text
 * @returns {string[][]}
 */
BOEService.search = (text) => {
    let result = [];

    const url = `https://www.boe.es/buscar/legislacion.php?campo%5B0%5D=ID_SRC&dato%5B0%5D=1&operador%5B0%5D=and&campo%5B1%5D=NOVIGENTE&operador%5B1%5D=and&campo%5B3%5D=CONSO&operador%5B3%5D=and&campo%5B2%5D=DOC&dato%5B2%5D=${text}&operador%5B2%5D=and&page_hits=50&sort_field%5B0%5D=PESO&sort_order%5B0%5D=desc&sort_field%5B1%5D=ref&sort_order%5B1%5D=asc&accion=Buscar`;

    const html = WebClient.getResponse(url);

    const $ = Cheerio.load(html.content);
    const resultado_busqueda = $('.resultado-busqueda');

    for (let index = 0; index < resultado_busqueda.length; index++) {
        let item = $(resultado_busqueda[index]);
        let link_ = '';
        link_ = item.find('.resultado-busqueda-link-defecto').attr('href');
        let link = `${link_.replace('..', BOEService.url_base_boe)}`;
        let data = [item.find('h3').text(), item.find('p').text(), link];
        result.push(data);
    }

    return result;
}