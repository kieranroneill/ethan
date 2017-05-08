import defaults from './defaults';

export default {
    responses: {
        defaults: {
            name: 'good-looking'
        },
        hello: 'Hey {+name}! How are you doing on this {+weather}?',
        weather: {
            default: 'fine day',
            [defaults.weatherApi.parameters.clear]: 'glorious day',
            [defaults.weatherApi.parameters.cloudy]: 'cloudy day',
            [defaults.weatherApi.parameters.drizzle]: 'miserable day',
            [defaults.weatherApi.parameters.rain]: 'miserable day',
            [defaults.weatherApi.parameters.snow]: 'wintry day'
        }
    }
};
