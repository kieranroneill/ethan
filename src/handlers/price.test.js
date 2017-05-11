import _ from 'lodash';

// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';

// Helpers.
import { mockInputEvent, mockPriceResponse } from '../../test/helpers';

// Services.
import { CryptoCompareApiService } from '../services/index';

// Handler.
import price from './price';

describe('price handler', () => {
    beforeEach(function() {
        const currentIntent = mockInputEvent.currentIntent;

        currentIntent.slots = { [defaults.input.slotTypes.currency]: defaults.currencies.GBP.aliases[0] };

        this.mockInputEvent = Object.assign({}, mockInputEvent, { currentIntent: currentIntent });
        this.mockPriceResponse = Object.assign({}, mockPriceResponse);
        this.getCurrentPriceStub = stub(CryptoCompareApiService, 'getCurrentPrice');
    });

    afterEach(function() {
        this.mockInputEvent = _.noop();
        this.mockPriceResponse = _.noop();

        this.getCurrentPriceStub.restore();
    });

    it('should return the correct response parameters', function(done) {
        this.getCurrentPriceStub.resolves(this.mockPriceResponse);

        price(this.mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            expect(response).to.have.property('sessionAttributes');
            expect(response).to.have.property('dialogAction');

            done();
        });
    });

    it('should use an error message if there is an error', function(done) {
        this.getCurrentPriceStub.rejects(null);

        price(this.mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            // The response should be a random error message.
            expect(strings.responses.errors)
                .to.include(response.dialogAction.message.content);

            done();
        });
    });

    it('should return the price if the currency is found', function(done) {
        const value = 60.82;

        this.mockPriceResponse = {
            GBP: value
        };

        this.getCurrentPriceStub.resolves(this.mockPriceResponse);

        price(this.mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            expect(response.dialogAction.message.content)
                .to.contain(defaults.currencies.GBP.code)
                .to.contain(value);

            done();
        });
    });
});
