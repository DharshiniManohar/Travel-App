import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/chatbot.css';

const responses = {
  "What packages do you offer?": "We offer a variety of travel packages including beach vacations, mountain retreats, city tours, and adventure trips.",
  "Can you tell me more about beach vacations?": "Our beach vacation packages include stays at luxurious resorts, beachside activities, and guided tours of the local attractions.",
  "What is included in your adventure trips?": "Adventure trips include activities like hiking, zip-lining, and safari tours, with accommodation and meals provided.",
  "Do you offer family-friendly packages?": "Yes, we offer family-friendly packages that include activities and accommodations suitable for all ages.",
  "What is the best time to visit Europe?": "The best time to visit Europe is during the spring (April to June) or fall (September to October) for pleasant weather and fewer crowds.",
  "How can I book a package?": "You can book a package by visiting our website and filling out the booking form or contacting our customer service for assistance.",
  "What are your cancellation policies?": "Our cancellation policies vary depending on the package. Please refer to our website or contact us for detailed information.",
  "Do you offer travel insurance?": "Yes, we offer travel insurance as an optional add-on with our travel packages.",
  "How can I contact customer support?": "You can contact our customer support via email, phone, or live chat on our website.",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      const botResponse = responses[input.trim()] || "Sorry, I didn't understand that. Could you please rephrase?";
      const botMessage = { text: botResponse, sender: "bot" };
      
      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat with us</div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Chatbot />, document.getElementById('root'));
