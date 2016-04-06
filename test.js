'use strict';
/* eslint-env mocha */
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should minimize CSS', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.css', 'utf8'),
		fs.readFileSync('fixture/expected.css', 'utf8').trim()
	);
});
