import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { ProjectCard } from '../../components';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
}));

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainCOntainer}>
      <Grid container justify='center'>
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
