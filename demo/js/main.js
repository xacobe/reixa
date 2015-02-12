/********************************************************************************
  * Make table Row Highlighting
 ********************************************************************************
  * from: http://css-tricks.com/simple-css-row-column-highlighting/
  */

// Whatever kind of mobile test you wanna do.
if (screen.width < 500) {

  // :hover will trigger also once the cells are focusable
  // you can use this class to separate things
  $("body").addClass("nohover");

  // Make all the cells focusable
  $("td, th")
    .attr("tabindex", "1")
    // When they are tapped, focus them
    .on("touchstart", function() {
      $(this).focus();
    });

}
/* end table Row Highlighting */


/********************************************************************************
  * Grid Tools
  ********************************************************************************/

$(document).ready(function(){
  /* Add grid */
  $(".js-create-grid").click(function(){
      $(this).parent().append("<article class='g-1 box'> Hello!</article>");
  }); 
  
  
  /* Close parent div*/
  $(".js-close").click(function(){
    $(this).parent().remove();
  });
});
