export default {
    responses: {
        defaults: {
            default: 'Sorry ol\' boy, I didn\'t quite understand that one.',
            name: 'good-looking',
            weather: 'fine day'
        },
        errors: [
            'Sorry captain, something went wrong, shall we grab a cuppa and try again?',
        ],
        hello: 'Hey {+name}! How are you doing on this {+weather}?',
        weather: {
            ['Additional']: 'mundane day',
            ['Atmosphere']: 'misty day',
            ['Clear']: 'glorious day',
            ['Clouds']: 'cloudy day',
            ['Drizzle']: 'miserable day',
            ['Extreme']: 'terrifying day',
            ['Rain']: 'miserable day',
            ['Snow']: 'wintry day',
            ['Thunderstorm']: 'thundering day'
        }
    }
};
