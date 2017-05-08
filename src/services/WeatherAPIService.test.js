import _ from 'lodash';
import axios from 'axios';

// Config.
import defaults from '../config/defaults';

import { getCurrentWeather } from './WeatherAPIService';

describe('WeatherAPIService', () => {
    beforeEach(function() {
        this.axiosGetStub = stub(axios, 'get');
    });

    afterEach(function() {
        this.axiosGetStub.restore();
    });

    describe('getCurrentWeather()', function() {
        it('should contain the correct parameters', function(done) {
            const query = {
                q: ['London', 'GB']
            };

            this.axiosGetStub.resolves(null);

            getCurrentWeather(query).then(() => {
                const url = this.axiosGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.weatherApi.baseUrl)
                    .to.contain(defaults.weatherApi.apiKey);

                // Check parameters.
                _.forEach(query.q, value => expect(url).to.contain(value));

                done();
            });
        });
    });
});
