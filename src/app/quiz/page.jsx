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

  const { questions } = quiz;
  const { question, answers, image } = questions[activeQuestion];

  const onAnswerSelected = (answer, category) => {
    setChecked(true);
    setSelectedAnswerIndex(category);
    setSelectedAnswer(answer.category);
    console.log(answersHistory)

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

      const finalAnimal = calculatePersonalityTypeAndAnimal(finalResult);
      setAnimal(finalAnimal);
      console.log(finalResult)
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
      ESFP: 'Clownfish',
      ISTJ: 'Turtle',
      INTJ: 'Jellyfish',
      ENTP: 'Octopus', 
      ENTJ: 'Shark',
      INFJ: 'Axolotl', 
      ESTJ: 'Whale', 
      ENFP: 'Octopus', 
      ISFJ: 'Jellyfish'
    };
    console.log(personalityResult)

    return animalMapping[personalityResult] || 'Unknown Animal';
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
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
