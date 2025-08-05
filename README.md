

🤖 CodeX – AI Chat Assistant

CodeX is a simple and powerful web-based AI assistant built with Node.js, Express, and Vanilla JavaScript. It uses the [Groq API](https://console.groq.com/) and the `llama3-8b-8192` model to generate intelligent responses to user prompts.


🚀 Features

- ✅ Real-time AI chat interface
- ✅ Powered by Groq’s ultra-fast inference API
- ✅ Built with pure JavaScript, Node.js, and Express
- ✅ Easy to use and extend
- ✅ Minimal UI for seamless user experience


📁 Project Structure


CodeX/
│
├── client/
│   ├── index.html        # Frontend HTML page
│   ├── style.css         # Basic styling
│   └── script.js         # Handles frontend logic and API communication
    ├── package.json
│
├── server/
│   ├── server.js         # Express server handling API calls to Groq
    ├── package.json
│   └── .env              # Environment file for API key
│
├── .gitignore
└── README.md


⚙️ Getting Started

Follow these steps to run CodeX locally:

1. Clone the repository
git clone https://github.com/your-username/codex.git
cd codex

2. Install dependencies
npm install

3. Set up environment variables
Create a `.env` file inside the `server/` directory and add your Groq API key:

GROQ_API_KEY=your_api_key_here

4. Start the server
node server/server.js

5. Open the client
Open `client/index.html` in your browser to use the assistant.


🌐 API Details

The backend sends a `POST` request to Groq’s chat completion endpoint:

POST https://api.groq.com/openai/v1/chat/completions


**Example payload:**

{
  "model": "llama3-8b-8192",
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "What is JavaScript?" }
  ],
  "temperature": 0.7,
  "max_tokens": 3000
}


📸 Screenshot

<img width="1897" height="985" alt="Screenshot 2025-08-05 015008" src="https://github.com/user-attachments/assets/8dcf56fb-f42c-4d00-9422-4a84654c7e6d" />


🔧 Future Improvements

* 🌐 Deploy online (Vercel, Netlify, or Render)
* 💾 Add chat history using local storage
* 🎤 Add voice input and text-to-speech
* 🌓 Add light/dark mode toggle


📄 License

This project is licensed under the **MIT License**.


👨‍💻 Author

**Samuel Owolabi**
