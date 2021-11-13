import {AppBar, Toolbar, IconButton, ButtonBase} from '@mui/material';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
//buatganti
function Navbar({openMenu}){
    
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton  edge="start" color="inherit" aria-label="menu" onClick={()=>openMenu(true)}>
                    <MenuIcon/>
                </IconButton>
                <ButtonBase variant="text" component={Link} to="/">
                    <Typography variant="h6" component="div">
                        Social Distancing App
                    </Typography>
                </ButtonBase>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;