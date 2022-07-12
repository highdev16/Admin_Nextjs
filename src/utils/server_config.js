function APICall(url, data, successCallback, failureCallback) {
    var apiURL = url;
    // if (window.location.href.indexOf('localhost') > -1)
    //     apiURL = 'http://localhost:3002' + url;
    var loadingElement = document.getElementById('loading-background-area') || document.createElement('div');
    loadingElement.id = 'loading-background-area';
    loadingElement.style.cssText = 'position: fixed; left: 0; right: 0; bottom: 0; top: 0; z-index: 99999999; background: #000000cc';
    if (loadingElement.getAttribute('loadingCount'))
        loadingElement.setAttribute('loadingCount', +(loadingElement.getAttribute('loadingCount')) + 1 + "");
    else loadingElement.setAttribute('loadingCount', '1')
    loadingElement.innerHTML = `
        <div id='center-loading-icon'>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    `;
    document.body.appendChild(loadingElement);
    fetch(apiURL, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(response => {
        if (response.code === 0) {
            if (Number(document.getElementById('loading-background-area').getAttribute('loadingCount')) > 1) {
                document.getElementById('loading-background-area').setAttribute('loadingCount',
                    Number(document.getElementById('loading-background-area').getAttribute('loadingCount')) - 1 + "");
            } else {
                document.getElementById('loading-background-area').remove();
            }
            
            successCallback(response.data);
        } else throw [response.code, response.data];
    }).catch(e => {
        if (Number(document.getElementById('loading-background-area').getAttribute('loadingCount')) > 1) {
            document.getElementById('loading-background-area').setAttribute('loadingCount',
                Number(document.getElementById('loading-background-area').getAttribute('loadingCount')) - 1 + "");
        } else {
            document.getElementById('loading-background-area').remove();
        }
        if (!Array.isArray(e)) e = [-190, 'Unexpected error from server.'];
        if (e[0] === -167800) failureCallback(['login_issue']);
        else failureCallback(e);
    })
}

export default APICall;