import { useState } from "react"
import quiz from "../quiz"
import styles from './Quiz.module.css'
import Questions from './Questions'



export default function Quiz() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleQuizSelect = (id) => {
      setSelectedQuiz(id);
      console.log(id);
    };
  return (
    <div>
      <h1 className={styles.heading}>
        Get Set, Quiz! Explore Your Potential and Beat the Challenge!
      </h1>
      <h2 className={styles.heading}>Select a quiz</h2>
      <ul>
        {quiz.map((quiz) => (
          <>
            <div
              key={quiz.id}
              className={styles.card}
              onClick={() => handleQuizSelect(quiz.id)}
            >
              <div className={styles.container}>
                <li className={styles.list}> {quiz.title}</li>
                <p className={styles.desc}>{quiz.description}</p>
              </div>
            </div>
          </>
        ))}
      </ul>
      {selectedQuiz && <Questions quizId = {selectedQuiz} />}
    </div>
  );
}
