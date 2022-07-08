function APICall(url, data, successCallback, failureCallback) {
    var apiURL = url;
    // if (window.location.href.indexOf('localhost') > -1)
    //     apiURL = 'http://localhost:3002' + url;
    var loadingElement = document.createElement('div');
    loadingElement.style.cssText = 'position: fixed; left: 0; right: 0; bottom: 0; top: 0; z-index: 99999999; background: #000000cc';
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
            loadingElement.remove();
            successCallback(response.data);
        } else throw [response.code, response.data];
    }).catch(e => {
        loadingElement.remove();
        if (!Array.isArray(e)) e = [-190, 'Unexpected error from server.'];
        if (e[0] === -167800) failureCallback(['login_issue']);
        else failureCallback(e);
    })
}

export default APICall;