const defaults = {
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
