import React from 'react';

const Card = ({ question, storyImage, prompts, onSelect, selectedAnswerIndex }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
      <img src={storyImage} alt="Story" className="w-full h-64 object-cover rounded-md mb-4" />
      <div className="text-black mb-4">
        <div>{question}</div>
      </div>
      <div className="space-y-4">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt, index)}
            className={`block w-full py-2 px-4 rounded-lg transition duration-300 ${
              selectedAnswerIndex === index
                ? 'bg-yellow-300 text-gray-900'
                : 'bg-yellow-200 text-gray-700 hover:bg-yellow-300'
            }`}
          >
            {prompt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
