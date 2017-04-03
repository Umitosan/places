// BACK END
function Location(name, description) {
  this.name = name;
  this.description = description;
}

Location.prototype.getLocationDesc = function() {
  return this.name + " is quite a great place to visit!";
}

Location.prototype.getLocationName = function(){
  return this.name;
}

// FRONT END
$(document).ready(function(){

  $("form#addPlace").submit(function(event){
    event.preventDefault();
    // console.log("button pressed");
    var currentLocation = new Location($("form #input1").val(), $("form #input2").val());

    $("#list1").append("<li><span class='list-item'> " + currentLocation.getLocationName() + "</span></li>");

    $(".list-item").last().click(function(){
      $("#location-title").text(currentLocation.getLocationName());
      $("#location-desc").text(currentLocation.getLocationDesc());
      $("#location-inspect").show();
    });

  });

});
