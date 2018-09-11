# onamonam

> Find number of words occurrence from a text

## Installation

```sh
❯ yarn add 92bondstreet/onamonam
❯ make sandbox
```

## Usage

```js
const onamonam = require('onamonam');

const TEXT = 'In a free hour, when our power of choice is untrammelled and avoided and when nothing prevents our being able to do what we like best, every free hour is to be welcomed and every free hour avoided';
const occurrences = onamonam(TEXT);

console.log(occurrences);
```

## Api

### onamonam(text)

Return `Object` containing occurrence by word

#### text

Type: String


## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
