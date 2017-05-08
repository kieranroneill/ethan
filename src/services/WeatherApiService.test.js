import _ from 'lodash';

// Config.
import defaults from '../config/defaults';

// Helpers.
import { mockWeatherResponse } from '../../test/helpers';

// Services.
import * as HttpService from './HttpService';
import { getCurrentWeather } from './WeatherApiService';

describe('WeatherApiService', () => {
    beforeEach(function() {
        this.httpGetStub = stub(HttpService, 'httpGet');
    });

    afterEach(function() {
        this.httpGetStub.restore();
    });

    describe('getCurrentWeather()', function() {
        it('should contain the correct parameters', function(done) {
            const query = {
                q: ['London', 'GB']
            };

            this.httpGetStub.resolves(mockWeatherResponse);

            getCurrentWeather(query).then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.weatherApi.baseUrl)
                    .to.contain(defaults.weatherApi.apiKey);

                // Check parameters.
                _.forEach(query.q, value => expect(url).to.contain(value));

                done();
            });
        });

        it('should return the current weather', function(done) {
            this.httpGetStub.resolves(mockWeatherResponse);

            getCurrentWeather({ q: ['London', 'GB'] }).then(result => {
                expect(result).to.be.a('string')
                    .to.equal(mockWeatherResponse.weather[0].main);

                done();
            });
        });
    });
});
