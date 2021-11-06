import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Header from "./components/headerTop/Header";
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlePost/SinglePost";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/singlePost">
          <SinglePost />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
