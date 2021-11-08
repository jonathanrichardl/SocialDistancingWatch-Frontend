import Navbar from './components/navbar/NavigationBar.js';
import {Drawer } from '@mui/material';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import MenuItem from './components/MenuItem/MenuItem.js';
import DataDisplay from './components/DataDisplay/DataDisplay.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
//testtestdoang
import {useState} from 'react';


//spsekek
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const mockdata=[{kelas: "X MIPA I", violation: 10, timestamp: "10:15"},
                  {kelas: "X MIPA II", violation: 5, timestamp: "10:20"},
                  {kelas: "XI MIPA I", violation: 2, timestamp: "10:12"}];
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
            <Home data={mockdata}/>
          </Route>
          <Route path='/components/DataDisplay' component={DataDisplay}/>
      </Switch>
    </Router>
  );
}

export default App;
