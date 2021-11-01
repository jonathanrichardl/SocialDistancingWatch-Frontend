import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

function Navbar(){
 
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;