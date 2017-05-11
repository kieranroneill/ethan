import _ from 'lodash';

// Config.
import defaults from '../config/defaults';

/**
 * Checks if the currency exists for a given alias.
 * @param alias the alias to check.
 * @returns {string} a supported currency code or undefined.
 */
export function getCurrencyCode(alias) {
    let code;

    if(alias) {
        _.forEach(defaults.currencies, value => {
            if(_.includes(value.aliases, alias.toLowerCase())) {
                code = value.code;

                return false;
            }
        });
    }

    return code;
}

/**
 * Checks if the currency code is supported.
 * @param code the currency code to check.
 * @returns {boolean} true if it is supported, false otherwise.
 */
export function isCurrencySupported(code) {
    if(!code) {
        return false;
    }

    return !!_.find(defaults.currencies, object => object.code === code);
}
