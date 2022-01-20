import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogInScreen from './Screens/LogInScreen';


function App() {
  
  const user = null;

  return (
    <div className="app">
     
      <Router>      
        <Switch>
          {!user?<LogInScreen/>:
           (<Route exact path="/">
           <HomeScreen/>
           </Route>)
          }
         
        </Switch>  
    </Router>
    </div>
  );
}

export default App;
