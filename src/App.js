import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Nav from "./components/Nav";
import PageNotFound from "./components/pages/PageNotFound";
import Portfolio from "./components/pages/Portfolio";
import Skills from "./components/pages/Skills";
import LanguageContextProvider from "./context/LanguageContext";
import Interests from "./components/pages/Interests";

function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route path='/skills' component={Skills} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/work' component={Experience} />
            <Route path='/interests' component={Interests} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
