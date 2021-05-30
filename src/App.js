import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
