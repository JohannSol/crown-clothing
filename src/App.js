import './css/App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';

function App() {
  // this is where you initialize all the routes that will be referred to by LINK
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path='/' component = { HomePage } /> 
        <Route exact path='/shop' component = { ShopPage } /> 
      </Switch>
    </div>
  );
}

export default App;
