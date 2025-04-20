import { useQuiz } from "../context/QuizContext";
import UIButton from "./UIButton";

const StartScreen = function () {
  const { numOfQuestions } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numOfQuestions} Questions To Test Your React Mastery</h3>
      <UIButton type="start" text="Let's Start" />
    </div>
  );
};

export default StartScreen;
