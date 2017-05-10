import _ from 'lodash';

import { getCurrencyCode } from './currency.util';

describe('utilities/currency', () => {
    describe('getCurrencyCode()', () => {
        it('should return the default "USD" symbol if the alias is undefined', () => {
            const result = getCurrencyCode();

            expect(result).to.be.equal('USD');
        });

        it('should return the default "USD" symbol if the alias is not recognised', () => {
            const result = getCurrencyCode('intergalactic ooze');

            expect(result).to.be.equal('USD');
        });

        it('should return the currency symbol if the alias is recognised', () => {
            const result = getCurrencyCode('pound');

            expect(result).to.be.equal('GBP');
        });
    });
});
