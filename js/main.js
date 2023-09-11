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

$(document).ready(function() {
  $('#registration-form').submit(function(e) {
      e.preventDefault(); // Prevent the default form submission

      // Get user input from the form
      const email = $('#email').val();
      const password = $('#password').val();
      const type = $('#type').val();

      // Create a JSON object with user data
      const userData = {
          email: email,
          password: password,
          type: type
      };
      // Send a POST request to the registration route
      $.ajax({
          method: 'POST',
          url: 'http://localhost:3000/register', // This should match the registration route in your server.js
          data: JSON.stringify(userData),
          contentType: 'application/json',
          success: function(response) {
              // Handle the success response (e.g., show a success message)
              console.log(response);
              alert('User registered successfully!');
          },
          error: function(error) {
              // Handle any errors (e.g., show an error message)
              console.error('Registration error:', error);
              alert('Registration failed. Please try again.');
          }
      });
  });
});
