"use client";import React, { useState } from "react";
import { quiz } from "../data.js";

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

  const { questions } = quiz;
  const { question, answers } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer.category);
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => ({
      ...prev,
      [selectedAnswer]: prev[selectedAnswer] + 1,
    }));

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const finalAnimal = calculatePersonalityTypeAndAnimal();
      setAnimal(finalAnimal);
      setShowResult(true);
    }
    setChecked(false);
  };

  const calculatePersonalityTypeAndAnimal = () => {
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
      ESFP: 'Octopus', 
      ISFJ: 'Jellyfish'
    };

    return animalMapping[personalityResult] || 'Unknown Animal';
  };

  return (
    <div className="container">
      <h1>Personality Test</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer.text}</span>
              </li>
            ))}
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
