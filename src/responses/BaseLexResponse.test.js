import _ from 'lodash';

// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';

// Responses.
import BaseLexResponse from './BaseLexResponse';

describe('BaseLexResponse', () => {
    beforeEach(function() {
        this.response = new BaseLexResponse();
    });

    afterEach(function() {
        this.response = _.noop();
    });

    describe('when initialising', function() {
        it('should contain the correct properties', function() {
            // Session attributes.
            expect(this.response).to.have.property('sessionAttributes');
            expect(this.response.sessionAttributes).to.be.an('object')
                .to.be.empty;


            // Dialog actions.
            expect(this.response).to.have.property('dialogAction');

            expect(this.response.dialogAction).to.have.property('type')
                .to.equal(defaults.response.dialog.type.elicitIntent);

            expect(this.response.dialogAction).to.have.property('fulfillmentState')
                .to.equal(defaults.response.dialog.fulfillmentState.fulfilled);

            expect(this.response.dialogAction).to.have.property('message');
            expect(this.response.dialogAction.message).to.have.property('contentType')
                .to.equal(defaults.response.dialog.contentType.plainText);
            expect(this.response.dialogAction.message).to.have.property('content')
                .to.equal(strings.responses.defaults.default);

            expect(this.response.dialogAction).to.have.property('intentName')
                .to.be.null;

            expect(this.response.dialogAction).to.have.property('slots')
                .to.be.null;

            expect(this.response.dialogAction).to.have.property('slotToElicit')
                .to.be.null;

            // Response card.
            expect(this.response).to.have.property('responseCard');

            expect(this.response.responseCard).to.have.property('version')
                .to.be.a('number');

            expect(this.response.responseCard).to.have.property('contentType')
                .to.equal(defaults.response.card.contentType.generic);

            expect(this.response.responseCard).to.have.property('genericAttachments')
                .to.be.an('array');
        });
    });

    describe('setResponseMessage()', function() {
        it('should set the response message', function() {
            const message = 'Tulips or lilies?';

            this.response.setResponseMessage(message);

            expect(this.response.dialogAction.message.content).to.equal(message);
        });
    });
});
