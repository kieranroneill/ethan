import _ from 'lodash';

// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';

// Responses.
import { CloseLexResponse } from '../responses/index';

// Services.
import { CryptoCompareApiService } from '../services/index';

// Utilities.
import { currencyUtil } from '../utilities/index';

export default function price(event, context, callback) {
    const currency = event.currentIntent.slots[defaults.input.slotTypes.currency];
    const currencyCode = currencyUtil.getCurrencyCode(currency); // Determine the currency code.
    const response = new CloseLexResponse(event.sessionAttributes);

    CryptoCompareApiService.getCurrentPrice(currencyCode)
        .then(result => {
            let message;

            if(currencyCode) {
                message = strings.responses.price.found
                    .replace('{+currencyCode}', currencyCode)
                    .replace('{+price}', result[currencyCode]); // Get the price for the currency code.
            }
            else {
                message = strings.responses.price.notFound
                    .replace('{+currency}', currency);
            }

            response.setResponseMessage(message);
        })
        .catch(() => response.setResponseMessage(_.sample(strings.responses.errors))) // Get a random error message.
        .finally(() => callback(null, response.toResponse()));
}
