import React from 'react';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
function Footer() {
  const classess = useStyles();
  return (
    <Box className={classess.footer}>
      <Grid container className={classess.footerContainer} spacing={3}>
        <Grid item>תוכן</Grid>
        <Grid item>תוכן</Grid>
        <Grid item>תוכן</Grid>
      </Grid>
      <Grid container className={classess.footerContainer} spacing={3}>
        <Grid item>&#169;כל הזכויות שמורות</Grid>
      </Grid>
    </Box>
  );
}
export default dynamicSSR(Footer);
