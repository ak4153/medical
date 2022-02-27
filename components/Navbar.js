import React from 'react';
import { Grid, Link } from '@mui/material';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import NextLink from 'next/link';
import { Button } from '@material-ui/core';
function Navbar() {
  const classess = useStyles();

  return (
    <nav className={classess.navbarContainer}>
      <Grid container flexDirection={'row-reverse'} className={classess.navbar}>
        <Grid item md={2} xs={2}>
          <Button>
            <MenuSharpIcon
              style={{ fontSize: '50px', color: 'white' }}
            ></MenuSharpIcon>
          </Button>
        </Grid>
        <Grid item md={2} xs={2}>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              בית
            </Link>
          </NextLink>
        </Grid>
        <Grid item md={2} xs={2}>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              שירותים
            </Link>
          </NextLink>
        </Grid>
        <Grid item md={2} xs={2}>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              צוות מקצועי
            </Link>
          </NextLink>
        </Grid>
        <Grid item md={2} xs={2}>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              אודות
            </Link>
          </NextLink>
        </Grid>
        <Grid item md={2} xs={2}>
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              מודעות
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </nav>
  );
}

export default dynamicSSR(Navbar);
