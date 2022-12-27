function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}
let berat = new Bird();
berat.getWeight();

/*
closure
*/