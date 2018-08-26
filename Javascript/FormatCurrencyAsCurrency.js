// How to Format Currency in ES6

const money = 100;

// old way
money.toLocaleString('en-US', {style: 'currency', currency: 'USD'}
); // '$100.00'

// New ES6 WAY
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }
).format(money);