// Config.
import defaults from '../src/config/defaults';

/**
 * Mock input event used on lambda functions.
 */
export const mockInputEvent = {
    bot: {
        name: 'HAL',
        alias: 'More intelligent than you',
        version: '9000'
    },
    currentIntent: {
        name: 'HelloIntent',
        confirmationStatus: defaults.input.confirmationStatus.none,
        inputTranscript: 'Hello'
    },
    invocationSource: defaults.input.invocationSource.fulfillmentCodeHook,
    messageVersion: '1.0',
    outputDialogMode: defaults.input.outputDialogMode.text,
    sessionAttributes: {},
    userId: 'I am a fancy Facebook Id!'
};
