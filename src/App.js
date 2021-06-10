import "./App.css";
import Home from "./components/Home/index";
import About from "./components/About/index";
import NavBar from "./components/NavBar/index";
import Projects_layout from "./components/Projects_layout/index";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <NavBar />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/projects" render={() => <Projects_layout />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
