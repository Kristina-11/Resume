import { BrowserRouter, HashRouter, Route, Switch, useLocation } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Nav from "./components/Nav";
import PageNotFound from "./components/pages/PageNotFound";
import Portfolio from "./components/pages/Portfolio";
import Skills from "./components/pages/Skills";
import LanguageContextProvider from "./context/LanguageContext";
import Interests from "./components/pages/Interests";
import ReactGA from 'react-ga';
import { AnimatePresence } from "framer-motion";

function initializeAnalytics() {
  ReactGA.initialize('UA-189391863-1'); 
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeAnalytics();
  const location = useLocation();
  
  return (
    <LanguageContextProvider>
      <div className="App">
        <Nav />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={AboutMe} />
              <Route path='/skills' component={Skills} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/work' component={Experience} />
              <Route path='/interests' component={Interests} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </AnimatePresence>
      </div>
    </LanguageContextProvider>
  );
}

export default App;
