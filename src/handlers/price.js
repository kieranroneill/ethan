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
    const response = new CloseLexResponse(event.sessionAttributes);
    const currencyCode = currencyUtil.getCurrencyCode(event.currentIntent.slots[defaults.input.slotTypes.currency]); // Determine the currency code.

    CryptoCompareApiService.getCurrentPrice(currencyCode)
        .then(result => {
            // if(!currencyCode) {
            //     message
            // }

            response.setResponseMessage(strings.responses.defaults.default);
        })
        .catch(() => response.setResponseMessage(_.sample(strings.responses.errors))) // Get a random error message.
        .finally(() => callback(null, response.toResponse()));
}
