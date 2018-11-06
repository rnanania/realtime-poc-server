var FILTERS = {
    issuer: [],
    searchFor: [],
    restrictionCategory: [
        // { name: 'All', value: 'All', selected: false },
        { name: 'Advisory / Regulatory', value: 'advisoryRegulatory', selected: false },
        { name: 'Advisory / Reputational', value: 'advisoryReputational', selected: false },
        { name: 'Full Restriction', value: 'fullRestriction', selected: false },
        { name: 'Large Holdings', value: 'largeHoldings', selected: false },
        { name: 'Miscellaneous', value: 'miscellaneous', selected: false },
        { name: 'Offering / Debt Allocated', value: 'offeringDebitAllocated', selected: false},
        { name: 'Offering / Equity Allocated', value: 'offeringEquityAllocated', selected: false},
        { name: 'Regulatory', value: 'regulatory', selected: false}
    ],
    restrictionType: [
        {name: 'Tan', value: 'tan', selected: false},
        {name: 'Gold', value: 'gold', selected: false},
        {name: 'Teal', value: 'teal', selected: false},
        {name: 'Olive', value: 'olive', selected: false}
    ],
    tier: [
        {name: 'Higher Risk', value: 'higher', selected: false},
        {name: 'Standard Risk', value: 'standard', selected: false}
    ]
} 

module.exports = { FILTERS };