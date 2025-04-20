import { useQuiz } from "../context/QuizContext";
import UIButton from "./UIButton";

const EndScreen = function () {
  const { points, maxPossiblePoints, highscore } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage > 0 && percentage < 60) emoji = "🥉";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <UIButton type="restart" text="Restart" />
    </>
  );
};

export default EndScreen;
