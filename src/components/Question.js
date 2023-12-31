import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";
function Question() {
  const { dispatch, questions, answer, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option dispatch={dispatch} answer={answer} question={question} />
    </div>
  );
}

export default Question;
