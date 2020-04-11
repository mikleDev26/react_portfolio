import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {  
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';

import avatar from '../../assets/img/avatar.png';


const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: 'block',
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
    '& svg': {
      color: 'tan'
    },
  },
}));


const menuItems = [
  {
    listIcon: <Home />,
    linkText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    linkText: "Resume",
  },
  {
    listIcon: <Apps />,
    linkText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    linkText: "Сontacts",
  },
]


const NavBar = () => {
  const classes = useStyles();

  const outRef = useRef();

  const [state, setState] = useState({
    right: false
  });
  
  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
  };

  const sideList = (slider) => (
    <Box 
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
      >
      <Avatar className={classes.avatar} src={avatar} alt="avatar image"/>
      <Divider />
      <List>
        {menuItems.map((item, key) => (
        <ListItem className={classes.listItem} key={key} button>
          <ListItemIcon>
            {item.listIcon} 
          </ListItemIcon>
          <ListItemText primary={item.linkText} />
        </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <Box component="nav">
      <AppBar position="static" style={{ background: "#222" }}>
        <Toolbar>
          <IconButton ref={outRef} onClick={toggleSlider('right', true)}>
            <ArrowBack style={{ color: "tomato" }}/>
          </IconButton>
          <Typography variant="h5" style={{ color: "tan"}}>
            Portfolio
          </Typography>
          <MobileRightMenuSlider 
            open={state.right} 
            anchor="right"
            onClose={toggleSlider("right", false)}
          >
            {sideList('right')}
          </MobileRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default NavBar;
