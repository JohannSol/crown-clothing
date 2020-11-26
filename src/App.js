import './css/App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage =()=> (
  <div>
    <h1>This is the HATS page!!</h1>
  </div>
)

function App() {
  // this is where you initialize all the routes that will be referred to by LINK
  return (
    <div>
      <Switch> 
        <Route exact path='/' component = { HomePage } /> 
        <Route exact path='/hats' component = { HatsPage } /> 
      </Switch>
    </div>
  );
}

export default App;
