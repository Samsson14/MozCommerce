import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBarComponent from './components/NavBar';
import Home from './views/Home';
import Login from './views/Login';
import SignIn from './views/Signup';
import CreateProduct from './views/CreateProduct';
import Test from './views/Test';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignIn}/>
        <Route path='/newProduct' component={CreateProduct}/>
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/test' component={Test}/>
        <Route path='*'>
            <div>
              Opssss page not found!
            </div>
        </Route>
      </Switch>
    </Router>
    )
}

export default App
