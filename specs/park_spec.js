const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js')

describe('Park', function () {

  let dinosaur;
  let park;

  beforeEach(function() {
    dino1 = new Dinosaur("Tyrannosaurus", 2);
    dino2 = new Dinosaur("Velociraptor", 4);
    dino3 = new Dinosaur("Triceratops", 3);
    dino4 = new Dinosaur("Velociraptor", 4);
    park = new Park("Jurassic Park")
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('enclosure should start empty', function () {
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add dinosaur', function () {
    park.addDinosaur(dino1);
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to remove all dinosaurs of a particular type', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.removeDinosaursByType("Velociraptor");
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, [dino1, dino3]);
  });

  it('should be able to get all the dinosaurs with an offspring count of more than 2', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const actual = park.getAllDinoaursWithOffspringGreaterThan(2);
    assert.deepStrictEqual(actual, [dino2, dino3, dino4]);
  });



});
