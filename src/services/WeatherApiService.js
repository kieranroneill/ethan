import axios from 'axios';
import Promise from 'bluebird';

// Config.
import defaults from '../config/defaults';

// Services.
import { httpGet } from './HttpService';

// Utilities.
import { httpUtil } from '../utilities/index';

/**
 * Conveinence method for getting sending request.
 * @param endpoint the endpoint to use and any query parameters.
 * @returns {Promise} an async get request to the server.
 */
function createRequest(endpoint) {
    const url = defaults.weatherApi.baseUrl + endpoint + '&appid=' + defaults.weatherApi.apiKey;

    return httpGet(url);
}

/**
 * Creates a weather request.
 * @param query the query parameters to use in the request.
 * @returns {Promise} a promise containing the current weather.
 */
export function getCurrentWeather(query) {
    return createRequest('/weather?' + httpUtil.toQueryString(query)).then(response => response.weather[0].main);
}
