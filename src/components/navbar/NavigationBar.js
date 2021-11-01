import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';

function Navbar({openMenu}){
    
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>openMenu(true)}>
                    <MenuIcon/>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <HomeIcon/>
                </IconButton>
                <Typography variant="h7" component="div">
                    Social Distancing App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;