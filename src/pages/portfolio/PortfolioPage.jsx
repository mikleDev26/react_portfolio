import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { ProjectCard } from '../../components';

import project1 from '../../assets/img/html-css-javascript-lg.jpg';
import project2 from '../../assets/img/react-redux.jpg';
import project3 from '../../assets/img/mern-stack.jpg';
import project4 from '../../assets/img/javascript-fullstack.jpg';


const projectCovers = [
  project1,
  project2,
  project3,
  project4
];


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

        {projectCovers.map((imgUrl, idx) => (
          <Grid key={idx} item xs={12} sm={8} md={6}>
            <ProjectCard imgUrl={imgUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
