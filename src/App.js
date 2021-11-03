import Navbar from './components/navbar/NavigationBar.js';
import {Drawer } from '@mui/material';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import MenuItem from './components/MenuItem/MenuItem.js';
import DataDisplay from './components/DataDisplay/DataDisplay.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import {useState} from 'react';


//spsekek
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <Navbar openMenu={setMenuOpen}/>
      <Drawer anchor="left" open={isMenuOpen} onClose={()=> setMenuOpen(false)}>
        <MenuItem/>
      </Drawer>

      <Switch>
          <Route path='/components/About'>
            <About />
          </Route>
          <Route path='/components/Home' >
            <Home/>
          </Route>
          <Route path='/components/DataDisplay' component={DataDisplay}/>
      </Switch>
    </Router>
  );
}

export default App;
