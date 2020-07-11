function scrollToNew () {
    scrollTop = $(window).scrollTop();
    $('.new').each(function(i, div){ // loop through article headings
      h2top = $(div).offset().top; // get article heading top
      if (scrollTop < h2top) { // compare if document is below heading
        $.scrollTo(div, 800); // scroll to in .8 of a second
        return false; // exit function
      }
    });
  }

  function scrollToLast () {
    scrollTop = $(window).scrollTop();
  
    var scrollToThis = null;
  
    // Find the last element with class 'new' that isn't on-screen:
    $('.new').each(function(i, div) {
      h2top = $(div).offset().top;
      if (scrollTop > h2top) {
        // This one's not on-screen - make a note and keep going:
        scrollToThis = div;
      } else {
        // This one's on-screen - the last one is the one we want:
        return false;
      }
    });
  
    // If we found an element in the loop above, scroll to it:
    if(scrollToThis != null) {
      $.scrollTo(scrollToThis, 800);
    }
  }

  $(document).keydown(function (evt) {
    if (evt.keyCode == 40) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNew(); // scroll to the next new heading instead
    } else if (evt.keyCode == 38) { // up arrow
      evt.preventDefault();
      scrollToLast();
    }
  });