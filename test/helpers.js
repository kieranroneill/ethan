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
        confirmationStatus: defaults.input.confirmationStatus.none,
        name: 'HelloIntent',
        slots: {}
    },
    inputTranscript: 'Hello',
    invocationSource: defaults.input.invocationSource.fulfillmentCodeHook,
    messageVersion: '1.0',
    outputDialogMode: defaults.input.outputDialogMode.text,
    sessionAttributes: {},
    userId: 'I am a fancy Facebook Id!'
};

/**
 * A mock object returned from a CryptoCompare price request.
 * https://www.cryptocompare.com/api/#-api-data-price-
 */
export const mockPriceResponse = {
    USD: 89.48,
    EUR: 82.2,
    GBP: 69.37
};

/**
 * A mock object returned from a weather query to the OpenWeatherMap API
 * @see https://openweathermap.org/current#parameter
 */
export const mockWeatherResponse = {
    coord: {
        lon: -0.13,
        lat: 51.51
    },
    weather: [
        {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }
    ],
    base: 'stations',
    main: {
        temp: 282.61,
        pressure: 1027,
        humidity: 71,
        temp_min: 282.15,
        temp_max: 283.15
    },
    visibility: 10000,
    wind: {
        speed: 6.2,
        deg: 10
    },
    clouds: {
        all: 90
    },
    dt: 1494238800,
    sys: {
        type: 1,
        id: 5091,
        message: 0.0203,
        country: 'GB',
        sunrise: 1494217134,
        sunset: 1494272165
    },
    id: 2643743,
    name: 'London',
    cod: 200
};
