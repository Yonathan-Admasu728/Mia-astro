import { useState } from 'react'
import styles from '../styles/Quiz.module.css'

export default function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (selectedAnswer) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedAnswer
    setAnswers(newAnswers)
    setShowFeedback(true)
  }

  const navigateQuestion = (direction) => {
    const newIndex = currentQuestion + direction
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestion(newIndex)
      setShowFeedback(false)
    }
  }

  const submitQuiz = () => {
    setShowResults(true)
    const score = answers.filter((answer, index) => answer === questions[index].answer).length
    onComplete(score)
  }

  if (showResults) {
    return (
      <div className={styles.results}>
        <h3>Quiz Complete!</h3>
        <p>You scored {answers.filter((answer, index) => answer === questions[index].answer).length} out of {questions.length}</p>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className={styles.quiz}>
      <h3>Question {currentQuestion + 1} of {questions.length}</h3>
      <p>{question.question}</p>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswer(index)}
            className={`${answers[currentQuestion] === index ? styles.selected : ''} 
                        ${showFeedback ? (index === question.answer ? styles.correct : styles.incorrect) : ''}`}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className={styles.feedback}>
          {answers[currentQuestion] === question.answer ? "Correct!" : "Incorrect. Try again!"}
        </div>
      )}
      <div className={styles.navigation}>
        <button onClick={() => navigateQuestion(-1)} disabled={currentQuestion === 0}>Previous</button>
        {currentQuestion === questions.length - 1 ? (
          <button onClick={submitQuiz}>Submit Quiz</button>
        ) : (
          <button onClick={() => navigateQuestion(1)} disabled={!showFeedback}>Next</button>
        )}
      </div>
    </div>
  )
}