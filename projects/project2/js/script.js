 $(document).ready(function() {
 $('#hi').css('height', $(window).height()); 
 $(window).resize(function() {      
    $('#hi').css('height', $(window).height()); 
  });   
 
 $('#ParentContainer').scroll(function() { 
    $('#Fixed').css('top', $(this).scrollTop());
});

});   
