import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Faculty from './components/pages/Faculty';
import FacultyCardOne from './components/pages/FacultyCardOne';
import FacultyCardTwo from './components/pages/FacultyCardTwo';
import FacultyCardThree from './components/pages/FacultyCardThree';
import Student from './components/pages/Student';
import Studentlist from './components/pages/Studentlist';
import StudentOne from './components/pages/StudentOne';
import StudentTwo from './components/pages/StudentTwo';
import StudentThree from './components/pages/StudentThree'
import StudentFour from './components/pages/StudentFour'
import StudentFive from './components/pages/StudentFive'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/faculty' component={Faculty} />
          <Route path='/facultycardone' component={FacultyCardOne} />
          <Route path='/facultycardtwo' component={FacultyCardTwo} />
          <Route path='/facultycardthree' component={FacultyCardThree} />
          <Route path='/student' component={Student} />
          <Route path='/studentlist' component={Studentlist} />
          <Route path='/studentone' component={StudentOne} />
          <Route path='/studenttwo' component={StudentTwo} />
          <Route path='/studentthree' component={StudentThree} />
          <Route path='/studentfour' component={StudentFour} />
          <Route path='/studentfive' component={StudentFive} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
