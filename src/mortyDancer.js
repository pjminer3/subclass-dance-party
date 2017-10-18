var MakeMortyDancer = function(top, left, timeBetweenSteps) {
  this.char = 'morty';

  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

MakeMortyDancer.prototype = Object.create(MakeDancer.prototype);
MakeMortyDancer.prototype.constructor = MakeMortyDancer;

MakeMortyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('test');
  MakeDancer.prototype.step.call(this);
  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  // this.$node.toggle();
  this.$node.toggleClass("danceMove");
};

MakeMortyDancer.prototype.lineup = function() {
  this.setPosition($('body').height() - 200, this.left);
}