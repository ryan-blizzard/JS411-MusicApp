import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Nav() {
  const classes = useStyles();
  return (
    <div className='navBar'>
      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Music App
    </Typography>
  </Toolbar>
</AppBar>
    </div>
  )
}
