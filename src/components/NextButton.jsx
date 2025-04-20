import { useQuiz } from "../context/QuizContext";
import UIButton from "./UIButton";

const NextButton = function () {
  const { answer, index, numOfQuestions } = useQuiz();

  if (answer === null) {
    return null;
  }
  if (index < numOfQuestions - 1) {
    return <UIButton type="nextQuestion" text="Next" />;
  }
  if (index === numOfQuestions - 1) {
    return <UIButton type="end" text="Finish" />;
  }
};

export default NextButton;
