import _ from 'lodash';

/**
 * Converts an object to a url query string.
 * @param query an object to convert.
 * @returns {string} the object converted to a string.
 */
export function toQueryString(query) {
    let queryString = '';

    if(query) {
        queryString = _.map(query, (value, key) => {
            let result = value;

            // Convert arrays to comma separated strings.
            if(_.isArray(value)) {
                result = value.join(',');
            }

            return encodeURIComponent(key) + '=' + encodeURIComponent(result);
        }).join('&');
    }

    return queryString;
}
