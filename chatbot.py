import openai

openai.api_key = "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"

def chat_with_chatbot(message):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=50,
        temperature=0.7,
        n=1,
        stop=None,
       
    )
    return response.choices[0].text.strip()

# Example conversation
conversation = """
User: Hello, bot!
Bot: Hi, how can I assist you today?
"""

while True:
    user_input = input("User: ")
    conversation += f"\nUser: {user_input}"
    bot_response = chat_with_chatbot(conversation)
    conversation += f"\nBot: {bot_response}"
    print("Bot:", bot_response)
