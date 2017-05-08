import _ from 'lodash';

import { toQueryString } from './http.util';

describe('utilities/http', () => {
    describe('toQueryString()', () => {
        it('should return an empty string if the query is undefined', () => {
            const result = toQueryString();

            expect(result).to.be.a('string')
                .to.be.empty;
        });

        it('should return a string query if the query contains numbers and strings', () => {
            const query = {
                key1: 123,
                key2: 'something, something... Banana!'
            };
            const result = toQueryString(query);

            expect(result).to.be.a('string');

            _.forEach(query, (value, key) => expect(result).to.contain(key));
        });

        it('should convert an array to a comma separated string', () => {
            const array = [1, 2, 3, 4];
            const result = toQueryString({ someArray: array });

            expect(result).to.be.a('string');

            _.forEach(array, value => expect(result).to.contain(value));
        });
    });
});
