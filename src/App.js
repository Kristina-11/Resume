import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Nav from "./components/Nav";
import PageNotFound from "./components/pages/PageNotFound";
import Portfolio from "./components/pages/Portfolio";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route path='/skills' component={Skills} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/work' component={Experience} />
          <Route path='/contact' component={Contact} />
          <Route render={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
