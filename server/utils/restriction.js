var moment = require('moment');
var faker =  require('faker');
const { FILTERS } = require('./filters');

var generateRestriction = () => {
    return {
        itemType: ['issuer','security'].sort(function() {return 0.5 - Math.random()})[0],
        originalDateAdded: faker.date.past().toJSON(),
        issuerName: faker.company.companyName(),
        esmi: faker.random.number(),
        equityTicker: faker.finance.currencyCode(),
        debtTicker: faker.finance.currencyCode(),
        restrictionType: faker.commerce.color(),
        restrictionCategory: FILTERS.restrictionCategory.map(x => x.value).sort(function() {return 0.5 - Math.random()})[0],
        tier: FILTERS.tier.map(x => x.value).sort(function() {return 0.5 - Math.random()})[0],
        writtenCom: faker.random.word(),
        alphaCapture: faker.random.word(),
        trading: faker.random.word()
    }
};

var getRestrictions = () => {
    var restrictions = [];
    for( var count=0; count<10; count++ ){
        restrictions.push(generateRestriction());
    }
    return restrictions;
};

module.exports = { getRestrictions, generateRestriction };