import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from './page/Home'
import Header from './component/Header'
import Links from './page/Link'
import Topgun from './page/Topgun'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App" style={{fontFamily:'Mitr'}}>
     
      <Switch>
      <Route  path="/Link"><Links /></Route>
      <Route  path="/Topgun"><Topgun /></Route>
      <Route  path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
