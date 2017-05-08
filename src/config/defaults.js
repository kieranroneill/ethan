const defaults = {
    weatherApi: {
        baseUrl: 'https://api.openweathermap.org/data/2.5',
        apiKey: 'f7c7e51055362ba28ab8d2b3591856c9',
        parameters: {
            clear: 'Clear',
            cloudy: 'Cloudy',
            drizzle: 'Drizzle',
            rain: 'Rain',
            snow: 'Snow'
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
    }
};

export default defaults;
