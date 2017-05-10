import _ from 'lodash';

// Config.
import defaults from '../config/defaults';

// Services.
import { httpGet } from './HttpService';

// Utilities..
import { currencyUtil } from '../utilities/index';

/**
 * Gets the current market price of the currency. If the supplied codes are not supported, use all codes.
 * @returns {Promise} a promise that retrieves the current prices for each currency.
 */
export function getCurrentPrice() {
    const args = Array.prototype.slice.call(arguments);
    let url = defaults.cryptoCompareApi.baseUrl;
    let codes = _.filter(args, value => currencyUtil.isCurrencySupported(value)); // Add all supported currency codes.

    // If no supplied codes are supported, use all currency codes.
    if(codes.length < 1) {
        codes = _.map(defaults.currencies, value => value.code);
    }

    url += '/price?fsym=ETH';
    url += '&tsyms=' + codes.join(',');

    return httpGet(url);
}
