import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
