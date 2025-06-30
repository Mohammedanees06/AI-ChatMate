const { getAI } = require('../services/ai.service');

module.exports.getAiChatResponse = async (req, res) => {
  const messages = req.body.messages;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Messages array is required for chat.',
    });
  }

  try {
    const ai = getAI();

    // FIX: Gemini requires roles to be either 'user' or 'model'
    const formattedMessages = messages.map(msg => {
      let role = msg.role;

      if (role !== 'user' && role !== 'model') {
        role = role === 'assistant' ? 'model' : 'user';
      }

      return {
        role,
        parts: [{ text: msg.content }],
      };
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      systemInstruction: `
You are a smart, helpful, and friendly AI chatbot named "CodeMate". You can assist users with a wide range of questions — from programming and technology to general knowledge, advice, explanations, writing help, or daily life queries.

💡 How to behave:
- Be conversational and engaging — like a helpful friend who knows a lot.
- Adapt your tone based on the user's message: be formal when needed, casual when appropriate.
- If a user asks for code help, provide clean, well-commented code with clear explanations.
- If the question is not about code, answer it thoughtfully and clearly.
- If you're unsure, admit it honestly — but always try to be helpful.
- Never say you're “just an AI” or break character.
- Keep responses friendly, respectful, and concise — unless the user requests a deep explanation.

📚 Topics you can cover:
- Programming, debugging, and code reviews
- Study help and concept explanations
- Writing, grammar, and communication assistance
- Life advice, productivity, motivation, wellness
- News, facts, definitions, comparisons
- Recommendations (tools, books, strategies, etc.)
- Anything the user asks — respond intelligently and conversationally.

🎨 Tips:
- Use emojis like 💡, ✅, ❌, or 🚀 when appropriate to make responses lively.
- Always follow up with a helpful tone and encourage curiosity.
- If the user shares multiple questions, answer each clearly.

Your goal: Be the user’s go-to assistant for *any* kind of question — like a smarter, more helpful friend who is always ready to assist.
`,
      contents: formattedMessages,
    });

    const aiResponse = response.candidates?.[0]?.content?.parts?.[0]?.text || '⚠️ No response from AI.';

    res.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error('AI chat error:', error.message);
    console.error(error.stack);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};
