# AI ChatMate

AI ChatMate is a real-time conversational AI assistant powered by Google Gemini Pro. Built with React and Node.js for coding help and technical queries.


![Screenshot 2025-06-30 231128](https://github.com/user-attachments/assets/6a04f668-cef4-4310-985c-5c2826fd1958)
![Screenshot 2025-06-30 230404](https://github.com/user-attachments/assets/2fbe1a1f-457f-4a2c-be6b-06dbd4c1a23b)


## Features

- Real-time AI chat with Google Gemini Pro
- Clean, modern interface
- Context-aware conversations
- Markdown-free responses

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **AI:** Google Gemini Pro API

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammedanees06/AI-ChatMate.git
   cd AI-ChatMate
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in backend folder:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. **Run the application**
   ```bash
   # Start backend (Terminal 1)
   cd backend
   npm start
   
   # Start frontend (Terminal 2)
   cd frontend
   npm start
   ```

5. **Open browser**
   
   Go to `http://localhost:5173`

## Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in and create new API key
3. Copy to your `.env` file

## Project Structure

```
AI-ChatMate/
├── backend/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Author

 Made with 💻 by Mohammed Anees  

🔗 [LinkedIn](https://linkedin.com/in/mohammedaneesdev)  
💻 [GitHub](https://github.com/Mohammedanees06)
