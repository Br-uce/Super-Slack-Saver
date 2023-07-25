// Functions for Button clicking.

$(function monitorbuttons () {
  // Find all the monitoring buttons.
  var monitorbutton = $('.monitorbtn'); 
  // Add a click event listener for each of said buttons.
  monitorbutton.on("click",function(event) {
    event.stopPropagation();
    var button = $(event.target);
    // Code determining which button is clicked, and then passing the function for monitoring it's container.
    if(button.is('#quizzbtn')) {
      console.log("Quizz Monitor Button clicked.")
      monitorQuizz();
    }
    else if(button.is('#pwgbtn')) {
      console.log("Password Monitor Button clicked.")
      monitorPassword();
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
    // Code determining which button is clicked, and then passing the function for starting it's container.
    if(button.is('#quizzbtn')) {
      console.log("Quizz Start Button clicked.")
      startQuizz();
    }
    else if(button.is('#pwgbtn')) {
      console.log("Password Start Button clicked.")
      startPassword();
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
    // Code determining which button is clicked, and then passing the function for restarting it's container.
    if(button.is('#quizzbtn')) {
      console.log("Quizz Restart Button clicked.")
      restartQuizz();
    }
    else if(button.is('#pwgbtn')) {
      console.log("Password Restart Button clicked.")
      restartPassword();
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
    // Code determining which button is clicked, and then passing the function for stopping it's container.
    if(button.is('#quizzbtn')) {
      console.log("Quizz Stop Button clicked.")
      stopQuizz();
    }
    else if(button.is('#pwgbtn')) {
      console.log("Password Stop Button clicked.")
      stopPassword();
    }
    });
});

//Variables for the button internal docker functions
var apiUrl = "http://192.168.192.220/"
var quizzID = "ac4740d97467";
var passID = "49f35fddf960";

 //Test Button is unnecessary, but useful for bug testing, so the code is being commented out.
 $(function testbuttons () {
  // Find the test button. 
  var testbutton = $('#testbtn');
  testbutton.on("click",function() {
    console.log("Test Button Clicked");
      // Docker API endpoint URL
      var Url = apiUrl + "info"
      // Command payload
      var command = {
        // Include the necessary parameters for your Docker API command
      };
      // Send a GET request to the Docker API endpoint
      $.ajax({
        url: Url,
        type: 'GET',
        data: JSON.stringify(command),
        contentType: 'application/json',
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

// Functions for proper Button effects.

//Quizz Functions
function startQuizz() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + quizzID + "/start",
    success: function(data) {
      console.log("Container started successfully:", data);
    },
    error: function(error) {
      console.error("Error starting container:", error);
    }
  })
}
function stopQuizz() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + quizzID + "/stop",
    success: function(data) {
      console.log("Container stopped successfully:", data);
    },
    error: function(error) {
      console.error("Error stopping container:", error);
    }
  })
}
function restartQuizz() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + quizzID + "/restart",
    success: function(data) {
      console.log("Container restarted successfully:", data);
    },
    error: function(error) {
      console.error("Error restarting container:", error);
    }
  })
}

//Password Functions
function startPassword() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + passID + "/start",
    success: function(data) {
      console.log("Container started successfully:", data);
    },
    error: function(error) {
      console.error("Error starting container:", error);
    }
  })
}
function stopPassword() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + passID + "/stop",
    success: function(data) {
      console.log("Container stopped successfully:", data);
    },
    error: function(error) {
      console.error("Error stopping container:", error);
    }
  })
}
function restartPassword() {
  $.ajax({
    method: "POST", 
    url: apiUrl + "containers/" + passID + "/restart",
    success: function(data) {
      console.log("Container restarted successfully:", data);
    },
    error: function(error) {
      console.error("Error restarting container:", error);
    }
  })
}

// Monitor Functions
function monitorQuizz() {
  $.ajax({
    method: "GET", 
    url: apiUrl + "containers/" + quizzID + "/stats?stream=false",
    success: function(data) {
      var monRes = data;
      console.log("Container monitored successfully:");
      console.log( "The container's memory usage is: " + (Number(JSON.stringify(monRes.memory_stats.usage))/Number(JSON.stringify(monRes.memory_stats.limit))*100) + "%");
    },
    error: function(error) {
      console.error("Error monitoring container:", error);
    }
  })
}
function monitorPassword() {
  $.ajax({
    method: "GET", 
    url: apiUrl + "containers/" + passID + "/stats?stream=false",
    success: function(data) {      
      var monRes = data;
      console.log("Container monitored successfully:");
      console.log( "The container's memory usage is: " + (Number(JSON.stringify(monRes.memory_stats.usage))/Number(JSON.stringify(monRes.memory_stats.limit)))+ "%");
    },
    error: function(error) {
      console.error("Error monitoring container:", error);
    }
  })
}
