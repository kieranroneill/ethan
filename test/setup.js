import Promise from 'bluebird';
import { expect } from 'chai';
import { assert, mock, spy, stub } from 'sinon';
import sinonAsPromised from 'sinon-as-promised';

// Config.
import defaults from '../config/defaults';
import strings from '../config/strings';
import errors from '../config/errors';

// Use bluebird promises.
sinonAsPromised(Promise);

// General globals.
global.assert = assert;
global.strings = strings;
global.errors = errors;
global.expect = expect;
global.defaults = defaults;
global.mock = mock;
global.spy = spy;
global.stub = stub;
