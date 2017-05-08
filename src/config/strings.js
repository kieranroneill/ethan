export default {
    responses: {
        defaults: {
            name: 'good-looking'
        },
        hello: 'Hey {+name}! How are you doing on this {+weather}?',
        weather: {
            default: 'fine day',
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
