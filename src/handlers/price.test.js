// Helpers.
import { mockInputEvent, mockPriceResponse } from '../../test/helpers';

// Services.
import { CryptoCompareApiService } from '../services/index';

// Handler.
import price from './price';

describe('price handler', () => {
    beforeEach(function() {
        this.getCurrentPriceStub = stub(CryptoCompareApiService, 'getCurrentPrice');
    });

    afterEach(function() {
        this.getCurrentPriceStub.restore();
    });

    it('should return the correct response parameters', function(done) {
        this.getCurrentPriceStub.resolves(mockPriceResponse);

        price(mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            expect(response).to.have.property('sessionAttributes');
            expect(response).to.have.property('dialogAction');

            done();
        });
    });
});
