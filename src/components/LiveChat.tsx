import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Sarah from Muruka Nursery. How can I help you find the perfect plants today?",
      sender: "agent",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isTyping: false,
    },
  ]);
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAAZsZ-kYp6tPE7uCUSugU3kp6OR_4iTHE"
  );

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isTyping: false,
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Show typing indicator
      const typingIndicator = {
        id: messages.length + 2,
        text: "",
        sender: "agent",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isTyping: true,
      };
      setMessages((prev) => [...prev, typingIndicator]);
      setIsAgentTyping(true);

      // Get response from Gemini
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are Sarah, a friendly plant expert at Muruka Nursery. 
        Respond to this customer message about plants in a helpful, professional, 
        and slightly conversational tone: "${message}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Remove typing indicator and add actual response
        setMessages((prev) =>
          prev.filter((msg) => msg.id !== typingIndicator.id)
        );

        const agentResponse = {
          id: messages.length + 2,
          text: text,
          sender: "agent",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isTyping: false,
        };
        setMessages((prev) => [...prev, agentResponse]);
      } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Remove typing indicator and show error message
        setMessages((prev) =>
          prev.filter((msg) => msg.id !== typingIndicator.id)
        );

        const errorResponse = {
          id: messages.length + 2,
          text: "Sorry, I'm having trouble responding right now. Please try again later.",
          sender: "agent",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isTyping: false,
        };
        setMessages((prev) => [...prev, errorResponse]);
      } finally {
        setIsAgentTyping(false);
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 z-50"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-80 h-96"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-green-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">S</span>
          </div>
          <div>
            <p className="font-semibold text-sm">Sarah</p>
            <p className="text-xs text-green-100">
              Plant Expert • {isAgentTyping ? "Typing..." : "Online"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-green-700 rounded transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-green-700 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  } ${msg.isTyping ? "opacity-80" : ""}`}
                >
                  {msg.isTyping ? (
                    <div className="flex space-x-1 items-center">
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  ) : (
                    <>
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "user"
                            ? "text-green-100"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                disabled={isAgentTyping}
              />
              <button
                onClick={sendMessage}
                disabled={isAgentTyping || !message.trim()}
                className={`p-2 rounded-lg transition-colors ${
                  isAgentTyping || !message.trim()
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
