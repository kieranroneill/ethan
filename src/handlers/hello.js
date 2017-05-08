// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';

// Services.
import { WeatherApiService } from '../services/index';

// Responses.
import { CloseLexResponse } from '../responses/index';

export default function hello(event, context, callback) {
    let name = strings.responses.defaults.name;
    let weather = strings.responses.weather.default;
    //const input = event.currentIntent.inputTranscript;

    WeatherApiService.getCurrentWeather({ q: ['London', 'GB'] })
        .then(result => weather = strings.responses.weather[defaults.weatherApi.parameters[result]])
        .catch(() => weather = strings.responses.weather.default)
        .finally(() => {
            const message = strings.responses.hello
                .replace('{+name}', name)
                .replace('{+weather}', weather);
            const response = new CloseLexResponse(event.sessionAttributes, message);

            callback(null, response.toResponse());
        });
}
