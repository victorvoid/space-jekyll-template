(function( $, window, undefined ) {
  // Menu
  $("a#slide").click(function(){
    $("#sidebar,a#slide,#fade").addClass("slide");
    $("#open").hide();
    $("#search").hide();
    $("#close").show();
  });

  $("#fade").click(function(){
    $("#sidebar,a#slide,#fade").removeClass("slide");
    $("#open").show();
    $("#search").show();
    $("#close").hide();
  });

  //Remove space scroll
  window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
  };
  
  // Search panel mouse click event suppport
  $('#searching').click(function(){
    $('#fade').trigger('click');
    $("#search").trigger('click');
  })
  
  //Keys
  $(document).keydown(function(e){
    // console.log(e.key);
    if(! $('.search-form').hasClass('active')){
      switch(e.key) {
        case " ":
          $('a#slide').trigger('click');
          break;
        case "Escape":
          $('#fade').trigger('click');
          break;
      }
    }
    //sidebar active
    if($('#sidebar').hasClass('slide')){
      switch(e.key) {
        case "1":
          $("#sidebar ul:first-child li:first-child a").trigger('click');
          break;
        case "2":
          $("#sidebar ul:first-child li:nth-child(2) a").trigger('click');
          break;
        case "3":
          $("#sidebar ul:first-child li:nth-child(3) a").trigger('click');
          break;
        case "4":
          $("#sidebar ul:first-child li:nth-child(4) a").trigger('click');
          break;
        case "5":
          $("#sidebar ul:first-child li:nth-child(5) a").trigger('click');
          break;
        case "g":
          $("#sidebar ul:nth-child(2) li:first-child a").trigger('click');
          break;
        case "s":
          $('#fade').trigger('click');
          $("#search").trigger('click');
          break;
         case "t":
          $("#sidebar ul:nth-child(2) li:nth-child(3) a").trigger('click');
          break;
      }
    }
    //use esc key to close search panel: typo fixed
    if($('.search-form').hasClass('active')){
      switch(e.key) {
        case "Escape":
          $('.icon-remove-sign').trigger('click');
          break;
      }
    }
  });
  
  //Key release
  //Fix : extra character 's' is entered to the input field when switching to the search form by using keypress
  $(document).keyup(function(e){
    if($('.search-form').hasClass('active')){
      $(".search-form").find('input').focus();
    }else{
      $(".search-form").find('input').blur();
    }
  });
  
  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("body"),
    dothis: $('.dosearch')
  };

  bs.dothis.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    // Only focus the form after key release, prvent the character 's' entered immediately after key enter
    //bs.searchform.find('input').focus();     
    bs.canvas.toggleClass('search-overlay');
    $('.search-field').simpleJekyllSearch();
  });

  bs.close.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });
})( Zepto, window );
