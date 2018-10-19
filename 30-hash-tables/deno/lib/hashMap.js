'use strict';

class HashMap {
  constructor(nBuckets, hashAlgo){
    this.bucketCount = nBuckets;
    this.buckets = Array(this.bucketCount).fill(null);
  }

  sumHash(key) {
    return key.split('').reduce((a,b) => {
      return a + b.charCodeAt(0);
    }, 0) % this.bucketCount;
  }

  multiHash(key) {
    return key.split('').reduce((a,b) => {
      return a * b.charCodeAt(0);
    }, 1) % this.bucketCount;
  }

  set(key, value) {
    let hash = this.sumHash(key);
    this.buckets[hash] = {[key]: value};
  }

  get(key) {
    let hash = this.sumHash(key);
    return this.buckets[hash][key];
  }

  update(key, value) {
    let hash = this.sumHash(key);
    this.buckets[hash] = {[key]: value};
  }

  remove(key) {
    let hash = this.sumHash(key);
    this.buckets[hash] = null;
  }

  keys() {
    return this.buckets.map(obj => {
      if(obj){
        let key = Object.keys(obj)[0];
        return key;
      }else{
        return null;
      }
    });
  }

  serialize() {}

  deserialize() {}

  clear() {
    this.buckets = Array(this.bucketCount).fill(null);
  }

  prettyPrint() {
    let msg = '';

    this.keys().forEach(key => {
      if(key) {
        msg += `\n${key}: ${this.get(key)}`;
      }
    });

    console.log(msg);
  }
}

module.exports = HashMap;