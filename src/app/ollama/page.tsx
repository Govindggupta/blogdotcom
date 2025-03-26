"use client";

import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion"; // Import for smooth animations

async function OllamaInput(inputText: String) {
  const response = await axios.post("http://127.0.0.1:11434/api/generate", {
    model: "llama2",
    prompt: inputText,
    stream: false,
  });

  return response.data.response;
}

export default function OllamaComponent() {
  const [response, setResponse] = useState("");
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setResponse(""); // Reset response before fetching new one

    const result = await OllamaInput(inputText);
    
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
      <div className="text-lg font-semibold mb-2">Write your question:</div>

      <input
        type="text"
        placeholder="Enter your question"
        className="border-2 border-gray-300 bg-gray-800 rounded-lg p-2 m-2 text-white w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        className="border-2 bg-blue-500 border-blue-700 rounded-lg p-2 m-2 cursor-pointer hover:bg-blue-600 transition-all"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Generating..." : "Submit"}
      </button>

      {loading && (
        <div className="h-10 w-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin mt-4"></div>
      )}

{response && !loading && (
        <motion.div
          className="mt-4 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg shadow-lg w-4/5 text-left"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <strong className="text-blue-400">Response:</strong>
          <div className="mt-2 text-gray-300 whitespace-pre-line">
            {response.replace(/\n\d+\./g, "\n\n👉")} 
          </div>
        </motion.div>
      )}
    </div>
  );
}
