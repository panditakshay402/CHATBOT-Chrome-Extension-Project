from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    conversation = request.json['conversation']
    response = chat_with_chatbot(conversation)
    return jsonify({'response': response})

def chat_with_chatbot(conversation):
    # Your existing code for interacting with the OpenAI API goes here
    # Modify it as necessary to extract the response from the model

    # For testing purposes, a simple example response is provided
    response = "This is a test response from the chatbot"

    return response

if __name__ == '__main__':
    app.run(port=5000)
