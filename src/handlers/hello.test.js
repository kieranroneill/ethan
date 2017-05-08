// Config.
import strings from '../config/strings';

// Helpers.
import { mockInputEvent } from '../../test/helpers';

// Services.
import { WeatherApiService } from '../services/index';

// Handler.
import hello from './hello';

describe('hello handler', () => {
    beforeEach(function() {
        this.getCurrentWeatherStub = stub(WeatherApiService, 'getCurrentWeather');
    });

    afterEach(function() {
        this.getCurrentWeatherStub.restore();
    });

    it('should return the correct response parameters', function(done) {
        this.getCurrentWeatherStub.resolves(strings.responses.weather['Clear']);

        hello(mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            expect(response).to.have.property('sessionAttributes');
            expect(response).to.have.property('dialogAction');

            done();
        });
    });

    it('should return the default response if getting the weather api fails', function(done) {
        this.getCurrentWeatherStub.rejects(null);

        hello(mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;
            expect(response.dialogAction.message.content).to.contain(strings.responses.weather.default);

            done();
        });
    });
});
