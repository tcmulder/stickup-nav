/* stickup v1.0 | MIT | www.tcmulder.com */
(function($) {
  $.fn.stickup = function() {
    var stick = {
      //initialize the sticky nav
      init: function(navigation){
        //cache variables
        stick.doc = $(document);
        stick.nav = navigation;
        //set the height of the nav
        stick.navH = null;
        //starting scroll up/down positions
        stick.startUp = null;
        stick.startDown = null;
        //the last scrolled position
        stick.lastScrolled = 0;
        //to store timer
        stick.timer = null;
        //work on scroll
        $(document).on('scroll',function(){
          //be at least a little more performant
          clearTimeout(stick.timer);
          stick.timer = setTimeout(stick.move, 5);
        });
      },
      //when the user scrolls in some direction
      move: function(){
        // get the document top
        stick.docTop = stick.doc.scrollTop();
        // get the navigation height
        stick.navH = stick.nav.height();
        // get the nav top
        stick.navTop = stick.nav.offset().top;
        // get the nav bottom
        stick.navBot = stick.navTop + stick.navH;
        //if scrolling up call scroll up
        if(stick.docTop < stick.lastScrolled){
          stick.up();
        //if scrolling down then call scroll down
        } else if(stick.docTop > stick.lastScrolled){
          stick.down();
        }
        //capture scroll position for later
        stick.lastScrolled = stick.docTop;
      },
      //scroll up function
      up: function(){
        // if this is the start of the up scroll
        if(stick.startUp === null){
          // identify where the scroll originated
          stick.startUp = stick.docTop;
          // if the document's top is greater than the bottom of the navigation
          if(stick.docTop > stick.navBot){
            // position the navigation just off screen at the top
            stick.nav.css('top', stick.startUp - stick.navH - 5);//extra 5 to account for border
          }
          // set null value to down scroll's start
          stick.startDown = null;
        }
        // if the navigation is fully in view
        if(stick.navTop >= stick.docTop - 2){//extra 2 so it "snaps" to the top early
          // set the nav to fixed
          stick.nav.css({
            'top': '0',
            'position': 'fixed'
          });
        }
      },
      //scroll down function
      down: function(){
        // if this is the start of the down scroll
        if(stick.startDown === null){
          // if the top is 0 (the nav is fully in view)
          if(stick.nav.css('top') == '0px'){
            // set top (for absolute) to top of the visible area
            stick.nav.css('top', stick.docTop);
          }
          // set the position to absolute (resets fixed)
          stick.nav.css('position', 'absolute');
          // identify where scroll down originated
          stick.startDown = stick.docTop;
          // if not at or above (for momentum scrolling) the document
          if(stick.docTop > 0){
            // if the navigation's bottom is higher than the document's top
            if(stick.navBot <= stick.docTop){
              // set the navigation's top to be the document's top
              stick.nav.css('top', stick.docTop);
            }
          //  if at the top already
          } else {
            // make sure it stays at the top
            stick.nav.css('top', 0);
          }
          // set null value to up scroll's start
          stick.startUp = null;
        }
      }
    };
     //initialize the slider for the object passed in
    stick.init(this);
  };
}(jQuery));
