/* Need to make it check each button and pull off the appropriate effect.
Setup the test button to launch a HelloWorld Container.
Current idea is to check for which class type it is.
*/

$(function appbuttons () {
    // Find all the app starting buttons.
    var buttons = $('.appbtn'); 
    // Add a click event listener for each of said buttons.
    buttons.click(function(event) {
      event.stopPropagation();
      var button = $(event.target);
      // Code to execute when a button is clicked
      console.log("App Button clicked.");
      if(button.is('#quizzbtn')) {
        console.log("Quizz Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Button clicked.")
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
      console.log("Monitor Button clicked.");
      if(button.is('#quizzbtn')) {
        console.log("Quizz Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Button clicked.")
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
      console.log("Start Button clicked.");
      if(button.is('#quizzbtn')) {
        console.log("Quizz Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Button clicked.")
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
      console.log("Restart Button clicked.");
      if(button.is('#quizzbtn')) {
        console.log("Quizz Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Button clicked.")
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
      console.log("Stop Button clicked.");
      if(button.is('#quizzbtn')) {
        console.log("Quizz Button clicked.")
      }
      else if(button.is('#pwgbtn')) {
        console.log("Password Button clicked.")
      }
      });
  });

  $(function testbuttons () {
    // Find the test button.
    var buttons = $('#testbtn'); 
    // Add a click event listener for said buttos.
    buttons.click(function() {
      // Code to execute when a button is clicked
      console.log("Test Button clicked.");
      // This needs to connect to the Docker API, and start a Hello World Container.
      
      });
  });