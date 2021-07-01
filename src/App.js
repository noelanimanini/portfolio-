import "./App.css";
import Home from "./components/Home/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
