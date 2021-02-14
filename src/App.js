import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SingUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/createproject" component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
