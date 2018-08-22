'use strict';

let expect = require('expect');
let printFiles = require('../lib/print-files.js');

describe('testing printFiles', () => {
  it('should resolve an array with ["one", "two", "three"]', (done) => {
    let paths = [
      `${__dirname}/data/one.txt`,
      `${__dirname}/data/two.txt`,
      `${__dirname}/data/three.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toBe(null);
      expect(data).toEqual(['one', 'two', 'three'])
      done()
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/dont-exist.txt`,
      `${__dirname}/data/two.txt`,
      `${__dirname}/data/three.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done()
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/two.txt`,
      `${__dirname}/data/dont-exist.txt`,
      `${__dirname}/data/three.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done()
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/two.txt`,
      `${__dirname}/data/three.txt`,
      `${__dirname}/data/dont-exist.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done()
    });
  });

});
