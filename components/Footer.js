import React from 'react';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
function Footer() {
  const classess = useStyles();
  const date = new Date();
  return (
    <Box className={classess.footer}>
      <Grid container className={classess.footerContainer} spacing={3}>
        <Grid item>אב"ג שירותי סיעוד בע"מ</Grid>
        <Grid item> הירקון 116, תל-אביב</Grid>
        <Grid item>054-7005544</Grid>
      </Grid>
      <Grid container className={classess.footerContainer} spacing={3}>
        <Grid item>
          &#169;כל הזכויות שמורות AK Projects {date.getFullYear()}
        </Grid>
      </Grid>
    </Box>
  );
}
export default dynamicSSR(Footer);
