import { QuizProvider } from "../context/QuizContext";
import Header from "./Header";
import Main from "./Main";


const App = function () {
  return (
    <div className="app">
      <Header />
		<QuizProvider>
			<Main />
		</QuizProvider>
    </div>
  );
};

export default App;
