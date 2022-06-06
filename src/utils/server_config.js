function APICall(url, data, successCallback, failureCallback) {
    var apiURL = url;
    if (window.location.href.indexOf('localhost') > -1)
        apiURL = 'http://localhost:3002' + url;
    fetch(apiURL, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(response => {
        if (response.code === 0) {
            successCallback(response.data);
        } else throw response.code;
    }).catch(e => {
        console.log(e);
        if (e === -167800) failureCallback('login_issue');
        else failureCallback(e);
    })
}

export default APICall;