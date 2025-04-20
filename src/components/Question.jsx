import { useQuiz } from "../context/QuizContext";
import Option from "./Option";

const Question = function () {
  const { question } = useQuiz();

  return (
    <article>
      <h4>{question.question}</h4>
      <Option />
    </article>
  );
};

export default Question;
