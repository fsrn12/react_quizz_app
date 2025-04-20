import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SEC_PER_QUESTION = 30;
const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  status: "loading", // ["loading", "error","ready","active", "finished"]
};
const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
        status: "active",
      };

    case "end":
      return {
        ...state,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
        status: "finished",
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("UNKNOWN ACTION TYPE");
  }
};
export const QuizProvider = function ({ children }) {
  const [
    { questions, index, answer, points, highscore, secondsRemaining, status },
    dispatch,
  ] = useReducer(reducer, initialState);
  const question = questions[index];
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((a, c) => {
    a += c.points;
    return a;
  }, 0);

  useEffect(() => {
    const fetchQuiz = async function () {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.error(err.message);
        dispatch({ type: "dataFailed" });
      }
    };

    fetchQuiz();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        questions,
        question,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        status,
        numOfQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = function () {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error(
      `CONTEXT ERROR: Context is ${context}, QuizContext is used outside QuizProvider`,
    );
  }
  return context;
};
