
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Details from './componant/Details/Details';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
      <Switch>
        {/* route for home */}
        <Route exact path="/">
         <Home></Home>
        </Route>

        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/details/:departmentId">
          <Details></Details>

        </Route>


      </Switch>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
