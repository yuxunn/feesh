"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";
import Card from "./card.jsx";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter(); 

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [animal, setAnimal] = useState('');
  const [result, setResult] = useState({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
  });
  const [answersHistory, setAnswersHistory] = useState([]); 
  const [compatiblePartners, setCompatiblePartners] = useState([]);
  const [incompatiblePartners, setIncompatiblePartners] = useState([]);

  const { questions } = quiz;
  const { question, answers, image } = questions[activeQuestion];

  const onAnswerSelected = (answer, category) => {
    setChecked(true);
    setSelectedAnswerIndex(category);
    setSelectedAnswer(answer.category);

    const updatedAnswersHistory = [...answersHistory];
    updatedAnswersHistory[activeQuestion] = answer.category;
    setAnswersHistory(updatedAnswersHistory);

    setResult((prev) => ({
      ...prev,
      [answer.category]: prev[answer.category] + 1,
    }));
    console.log(result);
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const finalResult = {
        I: 0,
        E: 0,
        S: 0,
        N: 0,
        F: 0,
        T: 0,
        J: 0,
        P: 0,
      };

      answersHistory.forEach(category => {
        if (category) {
          finalResult[category] += 1;
        }
      });

      setResult(finalResult);
      const { animal, compatible, incompatible } = calculatePersonalityTypeAndAnimal(finalResult);
      router.push(
        `/result?animal=${encodeURIComponent(animal)}&compatible=${encodeURIComponent(compatible.join(","))}&incompatible=${encodeURIComponent(incompatible.join(","))}`
      );
      setAnimal(animal);
      setCompatiblePartners(compatible);
      setIncompatiblePartners(incompatible);

      setShowResult(true);
    }
    setChecked(false);
  };

  const calculatePersonalityTypeAndAnimal = (result) => {
    const comparePairs = (first, second) => {
      return result[first] >= result[second] ? first.toUpperCase() : second.toUpperCase();
    };

    const personalityResult = [
      comparePairs('I', 'E'),
      comparePairs('S', 'N'),
      comparePairs('F', 'T'),
      comparePairs('J', 'P')
    ].join('');

    const animalMapping = {
      ESFP: { animal: 'Clownfish', compatible: ['Axolotl', 'Whale'], incompatible: ['Turtle', 'Pufferfish'] },
      ENTP: { animal: 'Clownfish', compatible: ['Axolotl', 'Whale'], incompatible: ['Turtle', 'Pufferfish'] },
      ISFJ: { animal: 'Turtle', compatible: ['Jellyfish', 'Whale'], incompatible: ['Clownfish', 'Octopus'] },
      INFJ: { animal: 'Turtle', compatible: ['Jellyfish', 'Whale'], incompatible: ['Clownfish', 'Octopus'] },
      ISFP: { animal: 'Jellyfish', compatible: ['Turtle', 'Axolotl'], incompatible: ['Shark', 'Pufferfish'] },
      INFP: { animal: 'Jellyfish', compatible: ['Turtle', 'Axolotl'], incompatible: ['Shark', 'Pufferfish'] },  
      INTJ: { animal: 'Octopus', compatible: ['Shark', 'Pufferfish'], incompatible: ['Turtle', 'Whale'] },
      ENTP: { animal: 'Octopus', compatible: ['Shark', 'Pufferfish'], incompatible: ['Turtle', 'Whale'] },                 
      ESTJ: { animal: 'Shark', compatible: ['Octopus', 'Pufferfish'], incompatible: ['Jellyfish', 'Axolotl'] },          
      ENTJ: { animal: 'Shark', compatible: ['Octopus', 'Pufferfish'], incompatible: ['Jellyfish', 'Axolotl'] },     
      INTP: { animal: 'Axolotl', compatible: ['Clownfish', 'Jellyfish'], incompatible: ['Shark', 'Whale'] },  
      ENFJ: { animal: 'Axolotl', compatible: ['Clownfish', 'Jellyfish'], incompatible: ['Shark', 'Whale'] },         
      ISTJ: { animal: 'Whale', compatible: ['Clownfish', 'Turtle'], incompatible: ['Octopus', 'Axolotl'] },
      ESFJ: { animal: 'Whale', compatible: ['Clownfish', 'Turtle'], incompatible: ['Octopus', 'Axolotl'] },
      ISTP: { animal: 'Jellyfish', compatible: ['Octopus', 'Shark'], incompatible: ['Clownfish', 'Jellyfish'] },
      ESTP: { animal: 'Jellyfish', compatible: ['Octopus', 'Shark'], incompatible: ['Clownfish', 'Jellyfish'] },
    };

    const resultData = animalMapping[personalityResult] || { animal: 'Unknown Animal', compatible: [], incompatible: [] };
    
    return resultData;
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-[url('/static/Background.png')] bg-cover bg-center bg-no-repeat">
      <div>
        {!showResult ? (
          <div className="quiz-container text-black p-4">
            <Card
              questionNum={activeQuestion + 1}
              question={question}
              storyImage={image} 
              prompts={answers.map((answer, category) => ({ text: answer.text, category: answer.category }))}
              onSelect={(answer, category) => onAnswerSelected(answer, category)}
              selectedAnswerIndex={selectedAnswerIndex}
              nextQuestion = {nextQuestion}
            />
            {/* <button
              onClick={nextQuestion}
              className={checked ? "btn" : "btn-disabled"}
              disabled={!checked}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button> */}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <p>Your aquatic animal is: {animal}</p>
            <p>Compatible Animal: {compatiblePartners.join(', ')}</p>
            <p>Incompatible Animal: {incompatiblePartners.join(', ')}</p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
      <div className='text-black p-1 text-center text-sm'>
        <p>Made by @jing.yunn and @yuxun3696 :)</p> 
        <a href="https://github.com/yuxunn/feesh" className="flex justify-center items-center space-x-2">
          <img src="/static/socials/github.png" alt="GitHub" className="w-6 h-6" />
          <span>GitHub</span>
        </a>      
        </div>
    </div>
  );
};

export default Page;
