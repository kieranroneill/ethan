import _ from 'lodash';

// Config.
import defaults from '../../config/defaults';

// Module.
import CloseLexResponse from './CloseLexResponse';

describe('CloseLexResponse', () => {
    const message = 'Chuck is able to slam a revolving door.';

    beforeEach(function() {
        this.response = new CloseLexResponse();
    });

    afterEach(function() {
        this.response = _.noop();
    });

    describe('when initialising', function() {
        it('should initialise with defaults', function() {
            expect(this.response.dialogActions.type).to.equal(defaults.response.dialog.type.close);
            expect(this.response.dialogActions.fulfillmentState)
                .to.equal(defaults.response.dialog.fulfillmentState.fulfilled);
            expect(this.response.dialogActions.message.content).to.be.undefined;
        });
    });

    describe('setResponseMessage()', function() {
        it('should set the response message', function() {
            this.response.setResponseMessage(message);

            expect(this.response.dialogActions.message.content).to.equal(message);
        });
    });

    describe('toResponse()', function() {
        it('should return the default response', function() {
            const result = this.response.toResponse();

            expect(result.dialogActions).to.have.property('type');
            expect(result.dialogActions.type).to.equal(defaults.response.dialog.type.close);

            expect(result.dialogActions).to.have.property('fulfillmentState');
            expect(result.dialogActions.fulfillmentState).to.equal(defaults.response.dialog.fulfillmentState.fulfilled);

            expect(result.dialogActions).to.not.have.property('message');
            expect(result.dialogActions).to.not.have.property('intentName');
            expect(result.dialogActions).to.not.have.property('slots');
            expect(result.dialogActions).to.not.have.property('slots');

            expect(result).to.not.have.property('responseCard');
        });

        it('should return a response with a message', function() {
            let result;

            this.response.setResponseMessage(message);

            result = this.response.toResponse();

            expect(result.dialogActions).to.have.property('type');
            expect(result.dialogActions.type).to.equal(defaults.response.dialog.type.close);

            expect(result.dialogActions).to.have.property('fulfillmentState');
            expect(result.dialogActions.fulfillmentState).to.equal(defaults.response.dialog.fulfillmentState.fulfilled);

            expect(result.dialogActions).to.have.property('message');
            expect(result.dialogActions.message).to.have.property('content')
                .to.equal(message);

            expect(result.dialogActions).to.not.have.property('intentName');
            expect(result.dialogActions).to.not.have.property('slots');
            expect(result.dialogActions).to.not.have.property('slots');

            expect(result).to.not.have.property('responseCard');
        });
    });
});
