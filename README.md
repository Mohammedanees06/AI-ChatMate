# 🤖 AI ChatMate

**Your intelligent coding companion powered by Google Gemini Pro**

AI ChatMate is a modern, real-time conversational AI assistant built with the MERN stack. Get instant help with coding questions, development challenges, and technical queries through an intuitive chat interface that delivers clean, formatted responses.

![AI ChatMate Banner](https://via.placeholder.com/1200x400/1a1a1a/f59e0b?text=AI+ChatMate+%7C+Smart+Coding+Companion)

---

## ✨ Features

🚀 **Real-time AI Chat** - Instant responses powered by Google Gemini Pro  
🧠 **Context-Aware** - Maintains conversation history for better understanding  
🎨 **Modern UI** - Sleek dark theme with animated backgrounds  
💻 **Code-Focused** - Optimized for programming and development queries  
🔒 **Secure** - Environment variables for API key protection  
📱 **Responsive** - Works seamlessly on desktop and mobile  
⚡ **Fast** - Optimized performance with smooth animations  
🛡️ **Error Handling** - Robust error management and user feedback  

---

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI library with hooks
- **Tailwind CSS** - Utility-first styling framework
- **Lucide React** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Gemini API** - AI language model

### Development Tools
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **Git** - Version control

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammedanees06/AI-ChatMate.git
   cd AI-ChatMate
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   PORT=3000
   ```

5. **Start the development servers**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to start chatting!

---

## 📁 Project Structure

```
AI-ChatMate/
├── 📁 backend/
│   ├── 📁 routes/
│   │   └── ai.js                 # AI chat routes
│   ├── 📁 controllers/
│   │   └── aiController.js       # Chat logic
│   ├── 📁 middleware/
│   │   └── validation.js         # Input validation
│   ├── server.js                 # Express server
│   ├── package.json
│   └── .env.example
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── App.jsx              # Main chat component
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Tailwind styles
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini Pro API key | ✅ Yes |
| `PORT` | Backend server port (default: 3000) | ❌ No |

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy and paste it into your `.env` file

---

## 🎨 Features Showcase

### 💬 Intelligent Conversations
- Multi-turn conversations with context awareness
- Code syntax highlighting and formatting
- Clean, readable responses without markdown clutter

### 🎭 Beautiful UI
- Dark theme with golden accents
- Smooth animations and transitions
- Responsive design for all devices
- Loading states and visual feedback

### 🛡️ Robust Error Handling
- Network error recovery
- API rate limit handling
- User-friendly error messages

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mohammed Anees**  
Full Stack Developer & AI Enthusiast

🌐 **Portfolio:** [mohammedanees.dev](https://mohammedanees.dev)  
💼 **LinkedIn:** [linkedin.com/in/mohammedaneesdev](https://linkedin.com/in/mohammedaneesdev)  
📧 **Email:** [mohammedaneesdev@gmail.com](mailto:mohammedaneesdev@gmail.com)  
🐙 **GitHub:** [github.com/Mohammedanees06](https://github.com/Mohammedanees06)

---

## 🙏 Acknowledgments

- Google for the powerful Gemini AI API
- React team for the amazing framework
- Tailwind CSS for beautiful styling utilities
- The open-source community for inspiration

---


---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ 

</di
