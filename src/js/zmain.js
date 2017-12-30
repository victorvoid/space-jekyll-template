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

  // Search panel mouse click event support
  $('#searching').click(function(){
    $('#fade').trigger('click');
    $("#search").trigger('click');
  })

  //Keys
  $(document).keydown(function(e){
    if(!$('.search-form').hasClass('active')){
      switch(e.key) {
        case " ":
          $('a#slide').trigger('click');
          break;
        case "Escape":
          $('#fade').trigger('click');
          break;
      }
    }

    if($('#sidebar').hasClass('slide')){
      if(e.key === "s"){
        $('#fade').trigger('click');
        $("#search").trigger('click');
      } else {
        $("#sidebar ul").find("[key-trigger='" + e.key + "']").trigger('click');
      }
    }

    if($('.search-form').hasClass('active') && e.key === "Escape"){
      $('.icon-remove-sign').trigger('click');
    }
  });

  //Key release
  //Fix : extra character 's' is entered to the input field when s
  //      witching to the search form by using keypress
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
    // Only focus the form after key release, prvent the character 's'
    // entered immediately after key enter
    // bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
    $('.search-field').simpleJekyllSearch();
  });

  bs.close.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  });
})( Zepto, window );
