import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Card,
   CardActionArea,
   CardActions,
   CardMedia,
   Button,
   Typography,
   CardContent,
  } from '@material-ui/core';

import project1 from '../../assets/img/html-css-javascript-lg.jpg';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  }
}));


const ProjectCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
    <CardActionArea>
      <CardMedia
        component='img'
        alt='project 1'
        height='140'
        image={project1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Project 1
        </Typography>
        <Typography component='p' variant="body2" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Necessitatibus, non cupiditate vero natus recusandae 
          deleniti sit minus fuga delectus in molestias omnis perferendis 
          eligendi consequatur odio id dolorum quam soluta.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Live Demo
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
  )
}

export default ProjectCard
