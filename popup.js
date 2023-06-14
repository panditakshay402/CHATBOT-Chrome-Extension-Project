document.addEventListener("DOMContentLoaded", function() {
    var conversation = document.getElementById("conversation");
    var userInput = document.getElementById("user-input");
    var submitButton = document.getElementById("submit-button");
  
    userInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        submitButton.click();
      }
    });
  
    submitButton.addEventListener("click", function() {
      var userMessage = userInput.value;
      conversation.innerHTML += "<p>User: " + userMessage + "</p>";
      userInput.value = "";
    });

    function chat_with_chatbot(message) {
      // Send a message to the API and retrieve the response
      // You can use the existing chat_with_chatbot() function from the previous code
      // and make necessary adjustments if needed
    }
  });
 