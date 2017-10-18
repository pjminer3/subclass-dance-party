$(document).ready(function() {
  window.dancers = [];
  
  $('.addLineupButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      // window.dancers[i].setPosition(500, ($("body").width()/(window.dancers.length + 1)) * (i + 1));
      window.dancers[i].lineup();
    }
  });

  // MAKES MORTY JUMP 100PX WHENEVER HE IS CLICKED
  $('body').on('click', '.morty', function() {
    $(this).animate({top: '-=100px'});
    $(this).animate({top: '+=100px'});
  });


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.min($("body").height() * Math.random(), 550),
      $("body").width() * Math.random(),
      Math.max(Math.random() * 1000, 300)
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.dancer').on('click', function(event) {
      console.log('Element was clicked');
      $(this).toggleClass("test");
    });

  });
});

