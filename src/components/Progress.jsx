import { useQuiz } from "../context/QuizContext";

const Progress = function () {
  const { index, points, answer, numOfQuestions, maxPossiblePoints } =
    useQuiz();

  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/<strong>{numOfQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong>/<strong>{maxPossiblePoints} points</strong>
      </p>
    </header>
  );
};

export default Progress;
