import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/services">
          <Services></Services>
        </Route>

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        {/* <Route path="/course/:courseId">
          <CourseDetail></CourseDetail>
        </Route> */}

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
