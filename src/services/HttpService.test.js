import _ from 'lodash';
import axios from 'axios';

// Services.
import { handleResponse, httpGet, httpPost } from './HttpService';

describe('HttpService', () => {
    const testUrl = 'http://to.infinity.and.beyond';
    const testBody = {
        id: 'something..something...id'
    };

    beforeEach(function() {
        this.response = {
            data: testBody,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        this.axiosGetStub = stub(axios, 'get');
        this.axiosPostStub = stub(axios, 'post');
    });

    afterEach(function() {
        this.response = _.noop();

        this.axiosGetStub.restore();
        this.axiosPostStub.restore();
    });

    describe('handleResponse()', function() {
        it('should return a rejected promise if the HTTP status is 400', function(done) {
            this.response.status = 400;
            this.response.statusText = 'Bad Request';

            handleResponse(this.response).catch(result => {
                expect(result).to.deep.equal(this.response.data);

                done();
            });
        });

        it('should return a rejected promise if the HTTP status is 401', function(done) {
            this.response.status = 401;
            this.response.statusText = 'Unauthorized';

            handleResponse(this.response).catch(result => {
                expect(result).to.deep.equal(this.response.data);

                done();
            });
        });

        it('should return a rejected promise if the HTTP status is 500', function(done) {
            this.response.status = 500;
            this.response.statusText = 'Internal Server Error';

            handleResponse(this.response).catch(result => {
                expect(result).to.deep.equal(this.response.data);

                done();
            });
        });

        it('should return a resolved promise and the data if the HTTP status is 200', function(done) {
            handleResponse(this.response).then(result => {
                expect(result).to.deep.equal(this.response.data);

                done();
            });
        });

        it('should return a resolved promise and the data if the HTTP status is 201', function(done) {
            this.response.status = 201;
            this.response.statusText = 'Created';

            handleResponse(this.response).then(result => {
                expect(result).to.deep.equal(this.response.data);

                done();
            });
        });
    });

    describe('httpGet()', function() {
        it('should make a get request', function(done) {
            this.axiosGetStub.resolves(this.response);

            httpGet(testUrl).then(() => {
                assert.calledWith(this.axiosGetStub, testUrl);

                done();
            });
        });
    });

    describe('httpPost()', function() {
        it('should make a post request', function(done) {
            this.axiosPostStub.resolves(this.response);

            httpPost(testUrl, testBody).then(() => {
                assert.calledWith(this.axiosPostStub, testUrl, testBody);

                done();
            });
        });
    });
});
