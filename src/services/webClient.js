const WebClient = {};

WebClient.getResponse = (url) => {

    let result = {
        content: '', errors: []
    };
    let options = {
        'muteHttpExceptions': true
    };

    let response;

    try {

        response = UrlFetchApp.fetch(url, options);
        let responseCode = response.getResponseCode();

        if (responseCode === 200) {
            result.content = response.getContentText();
        } else {
            result.errors.push(response);
            Logger.log(`${response}`)
        }

    } catch (error) {
        result.errors.push(error);
        Logger.log(`${error}`);
    }

    return result;
}