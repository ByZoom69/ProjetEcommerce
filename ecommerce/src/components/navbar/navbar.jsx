import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.AppBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img src='' alt='' height='25px' className={classes.image} />
              INSTIC
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}></div>
          <IconButton size='small'  arial-label="" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;