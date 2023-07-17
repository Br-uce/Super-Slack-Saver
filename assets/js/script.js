// Functions for Buttons.
$(function appbuttons () {
    // Find all the app starting buttons.
    var buttons = $('.appbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      if(button.is('#quizzbtn')) {
        console.log("Quizz App Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password App Button clicked.")
      }
      });
  });

  $(function monitorbuttons () {
    // Find all the monitoring buttons.
    var buttons = $('.monitorbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      if(button.is('#quizzbtn')) {
        console.log("Quizz Monitor Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Monitor Button clicked.")
      }
      });
  });

  $(function startbuttons () {
    // Find all the app server starting buttons.
    var buttons = $('.startbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      if(button.is('#quizzbtn')) {
        console.log("Quizz Start Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Start Button clicked.")
      }
      });
  });

  $(function restartbuttons () {
    // Find all the app server restarting buttons.
    var buttons = $('.restartbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      if(button.is('#quizzbtn')) {
        console.log("Quizz Restart Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Restart Button clicked.")
      }
      });
  });

  $(function stopbuttons () {
    // Find all the app server stopping buttons.
    var buttons = $('.stopbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      if(button.is('#quizzbtn')) {
        console.log("Quizz Stop Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Stop Button clicked.")
      }
      });
  });

  $(function testbutton () {
    // Find the test button.
    var buttons = $('#testbtn'); 
    // Add a click event listener for said buttos.
    buttons.click(function() {
      // Code to execute when a button is clicked
      console.log("Test Button clicked.");
      // This needs to connect to the Docker API, and start a Hello World Container.
      });
  });