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

  const mockdata=[{kelas: "X MIPA I", violation: 10, timestamp: "10:15", gambar: '/samoyed.jpg'},
                  {kelas: "X MIPA II", violation: 5, timestamp: "10:20", gambar: '/contohkelas1.jpg'} ,
                  {kelas: "XI MIPA I", violation: 2, timestamp: "10:12", gambar: '/contohkelas2.jpg'},
                  {kelas: "XII MIPA I", violation: 120, timestamp: "10:12", gambar: '/contohkelas3.jpg'},
                  {kelas: "X MIPA iI", violation: 5, timestamp: "10:12", gambar: '/contohkelas2.jpg'}];
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
          <Route path='/'>
            <Home data={mockdata}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
