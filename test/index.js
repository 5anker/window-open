import assert from 'assert';
import open from '../src';

describe('typeof open is a function', () => {
	it('open', () => {
		assert.equal(typeof open === 'function', true);
	});
});
