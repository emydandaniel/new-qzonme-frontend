import { Switch, Route } from 'wouter';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import CreateQuiz from '@pages/CreateQuiz';
import AnswerQuiz from '@pages/AnswerQuiz';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/create" component={CreateQuiz} />
        <Route path="/quiz/:code" component={AnswerQuiz} />
        <Route path="/dashboard/:token" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
