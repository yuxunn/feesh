import React from 'react';

const Card = ({ questionNum, question, storyImage, prompts, onSelect, selectedAnswerIndex, nextQuestion }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-left font-sans border-2 border-black shadow-md rounded">
      <div className="text-[#FE6A57] mb-4 font-bold">
          <div>QUESTION {questionNum}/12 ⋆.˚ 𓇼</div>
      </div>
      <img
  src={storyImage}
  alt="Story"
  className="w-full h-auto object-contain rounded-md mb-4 border-2 border-black rounded"
/>
      <div className="space-y-2 ">
        <div className="text-black mb-4 ">
          <div>{question}</div>
        </div>
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelect(prompt, index)}
            className={`block w-full py-2 px-4 rounded-lg transition duration-300 border-2 border-black rounded text-left ${
              selectedAnswerIndex === index
                ? 'bg-[#FFD894] text-black'
                : 'bg-[#FFF9D7] text-black hover:bg-[#C7BE8C]'
            }`}
          >
            {prompt.text}
          </button>
        ))}
        {/* <div className="text-right text-blue">
            <button 
              className="text-[#5359FF] font-bold underline hover:text-[#9FA2FF]"
              onClick={nextQuestion}
            >
              {questionNum === 12 ? "Finish" : "࿐ ࿔*:･ﾟ Go to next →"}
            </button>
        </div> */}
        <div className="text-right text-[#5359FF]">
          ࿐ ࿔*:･ﾟ 
          {selectedAnswerIndex !== null && (
            
              <button 
                className="text-[#5359FF] font-bold underline hover:text-[#9FA2FF]"
                onClick={nextQuestion}
              >
                {questionNum === 12 ? "Finish" : "Go to next →"}
              </button>
  
          )}
        </div>

      </div>
    </div>
  );
};

export default Card;
