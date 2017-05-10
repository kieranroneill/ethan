import _ from 'lodash';

// Config.
import defaults from '../config/defaults';

// Helpers.
import { mockPriceResponse } from '../../test/helpers';

// Services.
import { getCurrentPrice } from './CryptoCompareApiService';
import * as HttpService from './HttpService';

describe('CryptoCompareApiService', () => {
    const allCodes = _.map(defaults.currencies, value => value.code);

    beforeEach(function() {
        this.httpGetStub = stub(HttpService, 'httpGet');
    });

    afterEach(function() {
        this.httpGetStub.restore();
    });

    describe('getCurrentPrice()', function() {
        it('should use all currency codes if no currency is defined', function(done) {
            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice().then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.cryptoCompareApi.baseUrl);

                // Check alll currency codes were used.
                _.forEach(allCodes, value => expect(url).to.contain(value));

                done();
            });
        });

        it('should use the default all currency codes if the currency is not recognised', function(done) {
            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice('There is no way this long string is a currency').then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.cryptoCompareApi.baseUrl);

                // Check alll currency codes were used.
                _.forEach(allCodes, value => expect(url).to.contain(value));

                done();
            });
        });

        it('should use the relevant currency code if the currency is recognised', function(done) {
            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice(defaults.currencies.EUR.code).then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.cryptoCompareApi.baseUrl)
                    .to.contain(defaults.currencies.EUR.code);

                done();
            });
        });

        it('should use only the supported currency codes', function(done) {
            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice(defaults.currencies.GBP.code, 'not a currency').then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.cryptoCompareApi.baseUrl)
                    .to.contain(defaults.currencies.GBP.code);

                done();
            });
        });

        it('should use multiple currency codes', function(done) {
            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice(defaults.currencies.GBP.code, defaults.currencies.EUR.code).then(() => {
                const url = this.httpGetStub.getCall(0).args[0];

                expect(url).to.be.a('string')
                    .to.contain(defaults.cryptoCompareApi.baseUrl)
                    .to.contain(defaults.currencies.GBP.code)
                    .to.contain(defaults.currencies.EUR.code);

                done();
            });
        });

        it('should return all specified currencies', function(done) {
            const codes = _.keys(mockPriceResponse); // Use keys from the mock response.

            this.httpGetStub.resolves(mockPriceResponse);

            getCurrentPrice.apply(null, codes)
                .then(result => {
                    _.forEach(result, (value, key) => expect(codes).to.contain(key)); // Check all currencies are returned.

                    done();
                });
        });
    });
});
