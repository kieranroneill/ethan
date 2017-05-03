// Helpers.
import { mockInputEvent } from '../../test/helpers';

import hello from './hello';

describe('hello handler', () => {
    it('should return a simple response', function(done) {
        hello(mockInputEvent, null, (error, response) => {
            expect(error).to.be.null;

            expect(response).to.have.property('sessionAttributes');
            expect(response).to.have.property('dialogAction');

            done();
        });
    });
});
