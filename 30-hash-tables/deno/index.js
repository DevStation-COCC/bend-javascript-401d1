'use strict';

const HashMap = require('./lib/hashMap');

let hashTable = new HashMap(8, 'sum');

hashTable.set('bob', 42);
hashTable.set('aod', 99);

hashTable.prettyPrint();
