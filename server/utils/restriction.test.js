var expect = require('expect');
var { generateRestriction } = require('./restriction');

describe('generateRestriction', () => {
    it('should generate correct restriction object', ()=> {
        var restriction = generateRestriction();
        expect(restriction).toBeDefined();
    });
});
