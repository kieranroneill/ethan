// Utilities.
import { getCurrencyCode, isCurrencySupported } from './currency.util';

describe('utilities/currency', () => {
    describe('getCurrencyCode()', () => {
        it('should return the default "USD" symbol if the alias is undefined', () => {
            const result = getCurrencyCode();

            expect(result).to.be.undefined;
        });

        it('should return the default "USD" symbol if the alias is not recognised', () => {
            const result = getCurrencyCode('intergalactic ooze');

            expect(result).to.be.undefined;
        });

        it('should return the currency symbol if the alias is recognised', () => {
            const result = getCurrencyCode('pound');

            expect(result).to.be.equal('GBP');
        });
    });

    describe('isCurrencySupported()', () => {
        it('should return false if the code is undefined', () => {
            const result = isCurrencySupported();

            expect(result).to.be.false;
        });

        it('should return false if the code is not supported', () => {
            const result = isCurrencySupported('unknown');

            expect(result).to.be.false;
        });

        it('should return true if the code is supported', () => {
            const result = isCurrencySupported('USD');

            expect(result).to.be.true;
        });
    });
});
