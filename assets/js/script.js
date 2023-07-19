// Functions for Buttons.
$(function appbuttons () {
  // Find all the app starting buttons.
  var appbutton = $('.appbtn');
  // Add a click event listener for each of said buttons.
  appbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code to execute when a button is clicked
    if(button.is('.quizzbtn')) {
      console.log("Quizz App Button clicked.")
    }
    else if(button.is('.pwgbtn')) {
      console.log("Password App Button clicked.")
    }
    });
});

$(function monitorbuttons () {
  // Find all the monitoring buttons.
  var monitorbutton = $('.monitorbtn'); 
  // Add a click event listener for each of said buttons.
  monitorbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code to execute when a button is clicked
    if(button.is('.quizzbtn')) {
      console.log("Quizz Monitor Button clicked.")
    }
    else if(button.is('.pwgbtn')) {
      console.log("Password Monitor Button clicked.")
    }
    });
});

$(function startbuttons () {
  // Find all the app server starting buttons.
  var startbutton = $('.startbtn'); 
  // Add a click event listener for each of said buttons.
  startbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code to execute when a button is clicked
    if(button.is('.quizzbtn')) {
      console.log("Quizz Start Button clicked.")
    }
    else if(button.is('.pwgbtn')) {
      console.log("Password Start Button clicked.")
    }
    });
});

$(function restartbuttons () {
  // Find all the app server restarting buttons.
  var restartbutton = $('.restartbtn');
  // Add a click event listener for each of said buttons.
  restartbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code to execute when a button is clicked
    if(button.is('.quizzbtn')) {
      console.log("Quizz Restart Button clicked.")
    }
    else if(button.is('.pwgbtn')) {
      console.log("Password Restart Button clicked.")
    }
    });
});

$(function stopbuttons () {
  // Find all the app server stopping buttons.
  var stopbutton = $('.stopbtn'); 
  // Add a click event listener for each of said buttons.
  stopbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code to execute when a button is clicked
    if(button.is('.quizzbtn')) {
      console.log("Quizz Stop Button clicked.")
    }
    else if(button.is('.pwgbtn')) {
      console.log("Password Stop Button clicked.")
    }
    });
});

$(function testbuttons () {
  // Find the test button. 
  var testbutton = $('#testbtn');
  testbutton.on("click",function() {
      // Docker API endpoint URL
      //var apiUrl = 'http://3.87.112.145:2375/info';
      var apiUrl = "https://cors-anywhere.herokuapp.com/http://3.87.112.145:2375/info"
      // Docker API credentials
      var username = 'sup3rslacks3rv3r';
      var password = 'vg3J#!5QL9cxSaQs';
      // Base64-encoded credentials for the Authorization header
      var base64Credentials = btoa(username + ':' + password);
      // Command payload
      var command = {
        // Include the necessary parameters for your Docker API command
      };
      // Send a GET request to the Docker API endpoint
      $.ajax({
        url: apiUrl,
        type: 'GET',
        data: JSON.stringify(command),
        contentType: 'application/json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + base64Credentials);
        },
        success: function(data) {
          // Handle the success response
          console.log('Command launched successfully:', data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
        // Handle the error response
        console.log('Error:', textStatus, errorThrown);
      }
    });
  }); 
});