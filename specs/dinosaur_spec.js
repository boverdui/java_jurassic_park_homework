const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function () {

  let dinosaur1;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
  });

  it('should have a type', function () {
    const actual = dinosaur1.type;
    assert.strictEqual(actual, "Tyrannosaurus");
  });

  it('should have a number of offspring per year', function () {
    const actual = dinosaur1.offspring;
    assert.strictEqual(actual, 2);
  });

});
