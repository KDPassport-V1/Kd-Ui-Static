import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />            
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutus">
            <p>About us page</p>
          </Route>
          <Route path="/schedule">
            <p>schedule</p>
          </Route>
          <Route path="/login">
            <p>schedule</p>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
