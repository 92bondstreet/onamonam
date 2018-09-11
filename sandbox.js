const extract = require('./extract');
const count = require('./count');
const onanonam = require('./index');

const TEXT = 'In a free hour, when our power of choice is untrammelled and avoided and when nothing prevents our being able to do what we like best, every free hour is to be welcomed and every free HOUR avoided';

console.log(extract(TEXT));
console.log(count(TEXT, 'free'));
console.log(count(TEXT, 'dddd'));
console.log(count(TEXT));
console.log(onanonam(TEXT));
