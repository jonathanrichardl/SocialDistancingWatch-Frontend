import logo from './logo.svg';
import Navbar from './components/navbar/NavigationBar.js';
import Drawer from '@mui/material/Drawer';
import {useState} from 'react';
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar openMenu={setMenuOpen}/>
      <Drawer anchor="left" open={isMenuOpen} onClose={()=> setMenuOpen(false)}>
        Menus here
      </Drawer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
