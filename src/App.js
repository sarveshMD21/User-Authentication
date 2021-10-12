import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import NewUser from './Components/NewUser'
import LogIN from './Components/LogIN';
import Welcome from './Components/Welcome';
function App() {
  return (
    <Router>
        <Switch>
           <Route exact path="/"><Home/></Route>
           <Route path="/new"><NewUser/></Route>
           <Route path="/login"><LogIN/></Route>
           <Route path="/welcome"><Welcome/></Route>
        </Switch>
    </Router>
  );
}

export default App;
