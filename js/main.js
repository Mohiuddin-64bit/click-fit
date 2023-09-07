$(document).ready(function() {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    type: "GET",
    dataType: "json",
    success: function(data) {
      // Get the text property from the JSON object.
      var text = data.text;
      var year = data.year;
      var number = data.number;

      // Set the text of the h2 element.
      $(".story").text(text);
      
      // Set the text of the p element.
      $(".year").text(year);
      $(".number").text(number);
    },
    error: function(xhr, textStatus, errorThrown) {
      // Handle the error.
      console.log("Error: " + errorThrown);
    }
  });
});