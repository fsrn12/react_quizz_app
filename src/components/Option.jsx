import { useQuiz } from "../context/QuizContext";

const Option = function () {
  const { dispatch, question, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          key={option}
          className={`btn btn-option
					${idx === answer ? "answer" : ""}
					${
            hasAnswered
              ? idx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
