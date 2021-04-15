import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalState";
import NavBar from "./Components/1.NavBar/NavBar";
import Footer from "./Components/2.Footer/Footer"
import HomePage from "./Pages/0.HomePage/HomePage";
import Wishlist from "./Pages/3.Wishlist/Whishlist";
import Watched from "./Pages/2.Watched/Watched";
import SignInSignUp from "./Pages/1.SignIn-SignUp/SignIn-SignUp";
import MyAccount from "./Pages/5.Account/MyAccount"
import Error404 from './Pages/6.Error404/Error404'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/wishlist' component={Wishlist} />
            <Route path='/watchlist' component={Watched} />
            <Route path='/SignIn' component={SignInSignUp} />
            <Route path='/account' component={MyAccount} />
            <Route path='' component={Error404} />
          </Switch>
        </Router>
        <Footer />
      </GlobalProvider>
    </div>
  );
}
export default App;
