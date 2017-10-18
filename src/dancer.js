// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;

  if (this.char === 'morty') {
    this.$node = $('<div class="' + this.char + '"><img src="img/morty1.png"></div>');
    // this.$pic = $('<img class="mortyImg" src="../img/morty1.png">');
  } else if (this.char === 'rick') {
    this.$node = $('<div class="' + this.char + '"><img class="rickImg" src="img/rick1.png"></div>');
  } else if (this.char === 'summer') {
    this.$node = $('<div class="' + this.char + '"><img class="summerImg" src="img/summer1.png"></div>');
  } else {
    this.$node = $('<span class="dancer"></span>');
  } 

  this.timer = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timer);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.moveToPortal = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.setPosition($('body').height() - 200, Math.max(this.left/3, 150 - this.left/10));
};