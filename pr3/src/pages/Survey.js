import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Results from '../components/Results'

function Survey() {
  const { questionNumber } = useParams();
  const prevQuestion = parseInt(questionNumber, 10) - 1;
  const nextQuestion = parseInt(questionNumber, 10) + 1;
  const totalQuestions = 10;
  const min = 1; 

  if (nextQuestion > totalQuestions) {
    return <Results />
  }

  
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      {prevQuestion > 1 && (
      <Link to={`/survey/${prevQuestion}`} className="button-link">
          Precedent
        </Link>
      )}
      <Link to={`/survey/${nextQuestion}`} className="button-link">
        Suivant
      </Link>
    </div>
  );
}

export default Survey;
