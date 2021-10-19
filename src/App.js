
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Consultant from './componant/Consultant/Consultant';
import Contact from './componant/Contact/Contact';

import Details from './componant/Details/Details';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Not from './componant/Not/Not';
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
        <PrivateRoute path="/details/:departmentId">
          <Details></Details>
        </PrivateRoute>

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

        {/* not Found */}
        <Route path="*">
         <Not></Not>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
