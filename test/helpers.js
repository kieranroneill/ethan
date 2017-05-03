// Config.
import defaults from '../src/config/defaults';

/**
 * Mock input event used on lambda functions.
 */
export const mockInputEvent = {
    messageVersion: '1.0',
    invocationSource: defaults.input.invocationSource.fulfillmentCodeHook,
    userId: 'I am a fancy Facebook Id!',
    bot: {
        name: 'HAL',
        alias: 'More intelligent than you',
        version: '9000'
    },
    outputDialogMode: defaults.input.outputDialogMode.text,
    currentIntent: {
        name: 'HelloIntent',
        confirmationStatus: defaults.input.confirmationStatus.none,
        inputTranscript: 'Hello'
    }
};
