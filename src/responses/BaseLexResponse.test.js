import _ from 'lodash';

// Config.
import defaults from '../config/defaults';

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
            // Dialog actions.
            expect(this.response).to.have.property('dialogActions');

            expect(this.response.dialogActions).to.have.property('type')
                .to.equal(defaults.response.dialog.type.elicitIntent);

            expect(this.response.dialogActions).to.have.property('fulfillmentState')
                .to.equal(defaults.response.dialog.fulfillmentState.fulfilled);

            expect(this.response.dialogActions).to.have.property('message');
            expect(this.response.dialogActions.message).to.have.property('contentType')
                .to.equal(defaults.response.dialog.contentType.plainText);
            expect(this.response.dialogActions.message).to.have.property('content')
                .to.be.null;

            expect(this.response.dialogActions).to.have.property('intentName')
                .to.be.null;

            expect(this.response.dialogActions).to.have.property('slots')
                .to.be.null;

            expect(this.response.dialogActions).to.have.property('slotToElicit')
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
});
