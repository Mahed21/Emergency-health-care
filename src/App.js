
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Consultant from './componant/Consultant/Consultant';
import Contact from './componant/Contact/Contact';

import Details from './componant/Details/Details';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';
import Registerd from './componant/Registerd/Registerd';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
     <AuthProvider>
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

        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <PrivateRoute path="/consultant">
          <Consultant></Consultant>

        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/registerd">
          <Registerd></Registerd>

        </Route>


      </Switch>
      <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
