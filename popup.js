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
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5000/chatbot", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({ conversation: message }));
        var response = JSON.parse(xhr.responseText);
        return response.response;
      }
      
  });
 