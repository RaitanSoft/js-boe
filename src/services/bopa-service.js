//const Cheerio = require("cheerio");

const BOPAService = {
    url_base_bopa: 'https://sede.asturias.es',
};

/** 
 * @param {string} text
 * @returns {string[][]}
 */
BOPAService.search = (text) => {
    let result = [];

    const url = `https://sede.asturias.es/bopa-disposiciones?_pa_sede_bopa_web_portlet_SedeBopaDispositionWeb_formDate=1611504932550&p_p_id=pa_sede_bopa_web_portlet_SedeBopaDispositionWeb&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_pa_sede_bopa_web_portlet_SedeBopaDispositionWeb_p_r_p_dispositionDate=&p_r_p_dispositionText=${text}&p_auth=`

    const html = WebClient.getResponse(url);

    const $ = Cheerio.load(html.content);
    const resultado_busqueda = $('.resul-1');

    for (let index = 0; index < resultado_busqueda.length; index++) {
        let item = $(resultado_busqueda[index]);
        let link_ = '';
        link_ = item.find('a').attr('href');
        let link = `${link_.replace('..', BOEService.url_base_bopa)}`;
        let data = [item.find('.tit-azulcl').text(), item.find('p').text(), link];
        result.push(data);
    }

    return result;
}