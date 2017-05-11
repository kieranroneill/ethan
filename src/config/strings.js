/*eslint-disable max-len */
export default {
    responses: {
        defaults: {
            default: 'Sorry ol\' boy, I didn\'t quite understand that one.',
            name: 'old bean',
            weather: 'fine day'
        },
        errors: [
            'Sorry captain, something went wrong, shall we grab a cuppa and try again?',
        ],
        hello: 'Hello {+name}, how the devil are you doing on this {+weather}?',
        price: {
            found: 'Jolly good show old bean! The current price for {+currencyCode} is {+price}.',
            notFound: 'Sorry old bean, I couldn\'t quite find a price for "{+currency}". How about the the current price for USD? Absolutely top hole - I have to say.'
        },
        weather: {
            ['Additional']: 'pretty mundane day',
            ['Atmosphere']: 'misty day',
            ['Clear']: 'glorious day',
            ['Clouds']: 'overcast day',
            ['Drizzle']: 'miserable day',
            ['Extreme']: 'frightful day',
            ['Rain']: 'miserable day',
            ['Snow']: 'wintry day',
            ['Thunderstorm']: 'frightful day'
        }
    }
};
/*eslint-enable max-len */
