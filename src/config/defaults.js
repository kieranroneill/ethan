const defaults = {
    cryptoCompareApi: {
        baseUrl: 'https://min-api.cryptocompare.com/data'
    },

    currencies: {
        EUR: {
            aliases: ['€', 'eur', 'euro', 'euros'],
            code: 'EUR'
        },
        GBP: {
            aliases: ['£', 'gbp', 'pound', 'pounds'],
            code: 'GBP'
        },
        JPY: {
            aliases: ['¥', 'jpy', 'yen'],
            code: 'JPY'
        },
        CHF: {
            aliases: ['chf', 'franc'],
            code: 'CHF'
        },
        USD: {
            aliases: ['$', 'usd', 'dollar', 'dollars'],
            code: 'USD'
        }
    },

    input: {
        confirmationStatus: {
            confirmed: 'Confirmed',
            denied: 'Denied',
            none: 'None'
        },
        invocationSource: {
            dialogCodeHook: 'DialogCodeHook',
            fulfillmentCodeHook: 'FulfillmentCodeHook' // Expects a response.
        },
        outputDialogMode: {
            text: 'Text',
            voice: 'Voice'
        },
        slotTypes: {
            currency: 'CurrencySlot'
        }
    },

    response: {
        card: {
            contentType: {
                generic: 'application/vnd.amazonaws.card.generic'
            }
        },
        dialog: {
            contentType: {
                plainText: 'PlainText',
                ssml: 'SSML'
            },
            fulfillmentState: {
                failed: 'Failed',
                fulfilled: 'Fulfilled'
            },
            type: {
                close: 'Close',
                confirmIntent: 'ConfirmIntent',
                delegate: 'Delegate',
                elicitIntent: 'ElicitIntent',
                elicitSlot: 'ElicitSlot'
            }
        }
    },

    weatherApi: {
        baseUrl: 'https://api.openweathermap.org/data/2.5',
        apiKey: 'f7c7e51055362ba28ab8d2b3591856c9'
    }
};

export default defaults;
