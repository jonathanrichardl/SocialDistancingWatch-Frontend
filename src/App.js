import Navbar from './components/navbar/NavigationBar.js';
import {Drawer } from '@mui/material';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import MenuItem from './components/MenuItem/MenuItem.js';
import DataDisplay from './components/DataDisplay/DataDisplay.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
//testtestdoang
import {useState,useEffect} from 'react';


//spsekek
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState([{kelas: "Loading", violation: "Loading", timestamp: "Loading", gambar: '/samoyed.jpg'}]);

  /*const mockdata=[{kelas: "X MIPA I", violation: 10, timestamp: "10:15", gambar: '/samoyed.jpg'},
                  {kelas: "X MIPA II", violation: 5, timestamp: "10:20", gambar: '/contohkelas1.jpg'} ,
                  {kelas: "XI MIPA I", violation: 2, timestamp: "10:12", gambar: '/contohkelas2.jpg'},
                  {kelas: "XII MIPA I", violation: 120, timestamp: "10:12", gambar: '/contohkelas3.jpg'},
                  {kelas: "X MIPA iI", violation: 5, timestamp: "10:12", gambar: '/contohkelas2.jpg'}];*/
  useEffect(() => {
    const id = setInterval(() => 
      fetch("http://localhost:8080/X%20IPA%1")
        .then(function(response) {
            if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;}
            response.json().then(function(datanya) {
            console.log(datanya[0]);
            setData(datanya);
          });
        })
    , 1000);
  
    return () => clearInterval(id);  
  }, []);
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
            <Home data={data}/>
          </Route>
          <Route path='/components/DataDisplay' component={DataDisplay}/>
          <Route path='/'>
            <Home data={data}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
