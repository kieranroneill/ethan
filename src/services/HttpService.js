import axios from 'axios';
import Promise from 'bluebird';

/**
 * Creates a default configuration to use in the axios request.
 * @param headers the headers to apply to the request.
 * @returns {Object} a configuration object.
 */
function getRequestConfig(headers) {
    return {
        headers: headers,
        validateStatus: () => true // Return resolved for all requests.
    };
}

/**
 * Handles response by using bluebird promises.
 * @param response the response object.
 * @returns {Promise} a bluebird promise.
 */
export function handleResponse(response) {
    if(response.status >= 400) {
        return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
}

export function httpGet(url, headers = {}) {
    return Promise
        .resolve(axios.get(url, getRequestConfig(headers)))
        .then(handleResponse);
}

export function httpPost(url, body, headers = {}) {
    return Promise
        .resolve(axios.post(url, body, getRequestConfig(headers)))
        .then(handleResponse);
}
