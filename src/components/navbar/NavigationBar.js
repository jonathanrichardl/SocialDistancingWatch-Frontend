import {AppBar, Toolbar, IconButton, ButtonBase} from '@mui/material';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
//buatganti
function Navbar({openMenu}){
    
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton  edge="start" color="inherit" aria-label="menu" onClick={()=>openMenu(true)}>
                    <MenuIcon/>
                </IconButton>
                <IconButton component={Link} to="/components/Home"  edge="start" color="inherit" aria-label="Home">
                    <HomeIcon/>
                </IconButton>
                <ButtonBase variant="text" component={Link} to="/components/Home">
                    <Typography variant="h6" component="div">
                        Social Distancing App
                    </Typography>
                </ButtonBase>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;