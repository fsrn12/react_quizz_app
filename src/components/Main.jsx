import { useQuiz } from "../context/QuizContext";
import Active from "./Active";
import AppError from "./AppError";
import EndScreen from "./EndScreen";
import Loader from "./Loader";
import StartScreen from "./StartScreen";

const Main = function () {
  const { status } = useQuiz();
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <AppError />}
      {status === "ready" && <StartScreen />}
      {status === "active" && <Active />}
      {status === "finished" && <EndScreen />}
    </main>
  );
};

export default Main;
