import { ApolloProvider } from '@apollo/client';
import './App.css';
import { AddQuestion } from './pages/create-new/AddQuestion';
import { QuestionDetails } from './pages/question-details/QuestionsDetails';
import { Questions } from './pages/questions-list/Questions.list';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { client } from './state';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <TopBar/>
        <Route path="/" exact component={Questions} />
        <Route path="/details" component={QuestionDetails} />
        <Route path="/add-question" component={AddQuestion} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
