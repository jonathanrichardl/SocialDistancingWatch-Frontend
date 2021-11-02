import Navbar from './components/navbar/NavigationBar.js';
import {Drawer,IconButton, Paper} from '@mui/material';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import MenuItem from './components/MenuItem/MenuItem.js';
import DataDisplay from './components/DataDisplay/DataDisplay.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <Navbar openMenu={setMenuOpen}/>
      <Drawer anchor="left" open={isMenuOpen} onClose={()=> setMenuOpen(false)}>
        <MenuItem/>
      </Drawer>
      <Paper elevation={2}>test paper</Paper>
      <Paper elevation={2}/>
      <Paper elevation={2}/>
      <Switch>
          <Route path='/components/About'>
            <About lala={'lalu'}/>
          </Route>
          <Route path='/components/Home'>
            <Home/>
          </Route>
          <Route path='/components/DataDisplay' component={DataDisplay}/>
      </Switch>
    </Router>
  );
}

export default App;
