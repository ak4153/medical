import React, { useState } from 'react';
import { Grid, Link } from '@mui/material';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import NextLink from 'next/link';
import { Button, List, ListItem } from '@material-ui/core';

function XsNavbar({ handleNavbarShow }) {
  const classess = useStyles();

  return (
    <nav className={classess.xsNavbarContainer}>
      <List className={classess.xsNavbar}>
        <ListItem>
          <Button onClick={handleNavbarShow}>
            <MenuSharpIcon
              style={{ fontSize: '20px', color: 'white' }}
            ></MenuSharpIcon>
          </Button>
        </ListItem>
        <ListItem>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              בית
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              צוות מקצועי
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              אודות
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              מודעות
            </Link>
          </NextLink>
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              שירותים
            </Link>
          </NextLink>
        </ListItem>
      </List>
    </nav>
  );
}
export default dynamicSSR(XsNavbar);
