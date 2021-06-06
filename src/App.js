import "./App.css";
import Home from "./components/Home/index";
import About from "./components/About/index";
import NavBar from "./components/NavBar/index";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
