import { useQuiz } from "../context/QuizContext";

const UIButton = function({type, text}) {
	const {dispatch} = useQuiz();
	return (
		<button className="btn btn-ui" onClick={()=>dispatch({type})}>
{text}
		</button>
	)
};

export default UIButton
