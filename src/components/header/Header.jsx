import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Grid,
  Box,
} from '@material-ui/core';
import avatar from '../../assets/img/avatar.png';
import { customTheme } from '../../assets/theme/theme';


const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },

  test: {
    color: theme.hueStatus.danger,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      <Avatar src={avatar} className={classes.avatar} alt="my avatar" />
      <Typography variant="h4">
        <Typed strings={["Michael Chigorin"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.test} variant="h5">
        fdsfsfsdfdsf
        <Typed 
          strings={["Css & HTML", "React & ContextAPI & Redux", "MERN Stack"]} 
          typeSpeed={40}
          backSpeed={60}
          loop
         />
      </Typography>
    </Box>
  );
};

export default Header;
