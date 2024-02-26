import { useState } from "react";
import QUESTIONS from "../quiz";
import styles from './Questions.module.css'
export default function Questions({quizId}) {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuiz = QUESTIONS.find((quiz) => quiz.id === quizId);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prev)=>{
        return [...prev, selectedAnswer]
    });
  }
  const activeQuestion = userAnswers.length;
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>{currentQuiz.questions[activeQuestion].text}</h2>
        <ul>
          {currentQuiz.questions[activeQuestion].answers.map((answer) => (
            <li key={answer} className={styles.answers}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
