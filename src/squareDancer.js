var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // console.log(this);
  // this.step();
  this.$node.toggle();
}
