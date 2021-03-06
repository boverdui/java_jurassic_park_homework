const Park = function (name) {
  this.name = name;
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursByType = function (type) {
  for (i = 0; i < this.enclosure.length; i++) {
    let dino = this.enclosure[i]
    if (dino.type === type) {
      this.enclosure.splice(i, 1);
    }
  }
};

Park.prototype.getAllDinoaursWithOffspringGreaterThan = function (threshold) {
  let selected_dinos = [];
  for (i = 0; i < this.enclosure.length; i++) {
    let dino = this.enclosure[i]
    if (dino.offspring > threshold) {
      selected_dinos.push(dino)
    }
  }
  return selected_dinos;
};

Park.prototype.getNumberOfDinosaursAfterYears = function (years) {
  let dino_count = 0;
  for (i = 0; i < this.enclosure.length; i++) {
    let dino = this.enclosure[i]
    dino_count += (1 + dino.offspring) ** years;
  }
  return dino_count;
}

module.exports = Park;
