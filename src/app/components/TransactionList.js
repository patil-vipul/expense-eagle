import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemSecondaryAction } from '@mui/material';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              {"05:50 PM"}
            </React.Fragment>
          }
        />
    
        <ListItemSecondaryAction>
          <Typography>-$100</Typography>
      </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              {"05:50 PM"}
            </React.Fragment>
          }
        />
    
        <ListItemSecondaryAction>
          <Typography className='text-green-600'>+$100</Typography>
      </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              {"05:50 PM"}
            </React.Fragment>
          }
        />
    
        <ListItemSecondaryAction>
          <Typography>-$100</Typography>
      </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
