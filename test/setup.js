import Promise from 'bluebird';
import { expect } from 'chai';
import { assert, mock, spy, stub } from 'sinon';
import sinonAsPromised from 'sinon-as-promised';

// Use bluebird promises.
sinonAsPromised(Promise);

// General globals.
global.assert = assert;
global.expect = expect;
global.mock = mock;
global.spy = spy;
global.stub = stub;
