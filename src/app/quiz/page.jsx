"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";
import Card from "./Card";

const Page = () => {
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

    // Haven't organised the mappings yet, now the mappings are just randomly allocated. 
    const animalMapping = {
      ESFP: { animal: 'Clownfish', compatible: ['Octopus'], incompatible: ['Shark'] },
      ISTJ: { animal: 'Turtle', compatible: ['Axolotl'], incompatible: ['Whale'] },
      INTJ: { animal: 'Jellyfish', compatible: ['Shark'], incompatible: ['Clownfish'] },
      ENTP: { animal: 'Octopus', compatible: ['Clownfish'], incompatible: ['Jellyfish'] },
      ENTJ: { animal: 'Shark', compatible: ['Jellyfish'], incompatible: ['Clownfish'] },
      INFJ: { animal: 'Axolotl', compatible: ['Turtle'], incompatible: ['Octopus'] },
      ESTJ: { animal: 'Whale', compatible: ['Turtle'], incompatible: ['Axolotl'] },
      ENFP: { animal: 'Octopus', compatible: ['Clownfish'], incompatible: ['Jellyfish'] },
      ISFJ: { animal: 'Jellyfish', compatible: ['Shark'], incompatible: ['Octopus'] }
    };

    const resultData = animalMapping[personalityResult] || { animal: 'Unknown Animal', compatible: [], incompatible: [] };
    
    return resultData;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div>
        <h2 className="text-black">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container text-black">
            <Card 
              question={question}
              storyImage={image} 
              prompts={answers.map((answer, category) => ({ text: answer.text, category: answer.category }))}
              onSelect={(answer, category) => onAnswerSelected(answer, category)}
              selectedAnswerIndex={selectedAnswerIndex}
            />
            <button
              onClick={nextQuestion}
              className={checked ? "btn" : "btn-disabled"}
              disabled={!checked}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
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
    </div>
  );
};

export default Page;
