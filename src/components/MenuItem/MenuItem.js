import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom';
function MenuItem(){
    /*        <ListItem component={Link} to='/components/DataDisplay' button key={'DataDisplay'}>
          <ListItemIcon>
            <StorageIcon/>
          </ListItemIcon>
          <ListItemText primary={'Data Display'} />
        </ListItem>*/
    return(
        <List>
        <ListItem component={Link} to='/components/About' button key={'About'}>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
        </List>
    );
}

export default MenuItem;