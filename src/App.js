//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/sign-up' component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
