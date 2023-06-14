# ChatBot Chrome Extension

This project is a Chrome extension that utilizes the OpenAI GPT-3.5 model to create a chatbot. The chatbot remembers previous tasks and engages in conversation with the user.

## Features

- Real-time chat with the chatbot
- User input and chat history displayed in the extension popup
- Integration with the OpenAI GPT-3.5 API for generating chatbot responses
- Backend server built with Flask to handle API requests

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/panditakshay402/chatbot-chrome-extension-project.git
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle switch in the top-right corner.
4. Click on "Load unpacked" and select the cloned project folder (`chatbot-chrome-extension`).
5. The ChatBot extension will be added to your Chrome browser.

## Usage

1. Click on the ChatBot extension icon in your Chrome toolbar to open the chat popup.
2. Enter messages in the input field and press Enter or click the Send button.
3. The chat history will display the conversation between the user and the chatbot.

## Configuration

To configure the extension and integrate it with the OpenAI GPT-3.5 API, follow these steps:

1. Obtain an API key from OpenAI. Visit the OpenAI website for instructions on getting an API key.
2. Open the `popup.js` file in the project folder.
3. Locate the `chat_with_chatbot()` function in the code.
4. Replace the placeholder API key with your actual OpenAI API key:

   ```javascript
   openai.api_key = "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";
   Save the `popup.js` file.

5.Start the Flask server by running `backend.py`

6.python backend.py

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.


