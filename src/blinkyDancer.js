var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var oldStep = blinkyDancer.step;
  this.oldStep = makeDancer.prototype.step;
  console.log(this);
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}
