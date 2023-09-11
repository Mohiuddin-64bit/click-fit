$(document).ready(function () {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      var text = data.text;
      var year = data.year;
      var number = data.number;

      $(".story").text(text);

      $(".year").text(year);
      $(".number").text(number);
    },
    error: function (err) {
      console.log("Error: " + err);
    },
  });
});

$(document).ready(function () {
  $("#registration-form").submit(function (e) {
    e.preventDefault(); 

    const email = $("#email").val();
    const password = $("#password").val();
    const type = $("#type").val();

    const userData = {
      email: email,
      password: password,
      type: type,
    };

    $.ajax({
      method: "POST",
      url: "http://localhost:3000/register",
      data: JSON.stringify(userData),
      contentType: "application/json",
      success: function (response) {
        console.log(response);
        alert("User registered successfully!");
      },
      error: function (error) {
        console.error("Registration error:", error);
        alert("Registration failed. Please try again.");
      },
    });
  });
});
// $(document).ready(function () {
//   $("#upload_image_background").on("change", function (e) {
//     const files = e.target.files;
//     $("#field").css("background: green")


//     if (files && files.length > 0) {
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];

//         const formData = new FormData();
//         formData.append("image", file);

//         $.ajax({
//           url: "http://localhost:3000/upload",
//           type: "POST",
//           data: formData,
//           processData: false,
//           contentType: false,
//           success: function (response) {
//             const imageUrl = response.imageUrl;

//             $(".upload_gallery").append(
//               `<img src="${imageUrl}" alt="Uploaded Image" class="uploaded-image">`
//             );
//           },
//           error: function (error) {
//             console.error("Error uploading image:", error);
//           },
//         });
//       }
//     }
//   });
// });
$(document).ready(function() {
  // Listen for changes in the file input
  $('#imageUpload').on('change', function(e) {
      const file = e.target.files[0];
      
      if (file) {
          // Create a FormData object to send the file to the server
          const formData = new FormData();
          formData.append('image', file);

          // Send the image data to the server using AJAX
          $.ajax({
              url: '/upload', // Replace with your backend endpoint for image upload
              type: 'POST',
              data: formData,
              processData: false,
              contentType: false,
              success: function(response) {
                  // Handle the server's response, e.g., display a success message or update the UI
                  $('#previewImage').attr('src', response.imageUrl);
                  $('#previewImage').show();
              },
              error: function(error) {
                  // Handle errors, e.g., display an error message to the user
                  console.error('Error uploading image:', error);
              }
          });
      }
  });
});
