import React from 'react';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import styled from 'styled-components';
export default function Footer() {
  const classess = useStyles();
  const date = new Date();
  return (
    <FooterWrapper>
      <FooterContentWrapper container spacing={3}>
        <Grid item>שירות עיקור וחיטוי מזגנים</Grid>
        <Grid item>
          <a href="tel:0527456683"> אלכס 052-7456683</a>
        </Grid>
      </FooterContentWrapper>
      <FooterContentWrapper container spacing={3}>
        <Grid item>{/* <FacebookSharpIcon /> */}</Grid>
      </FooterContentWrapper>
      <FooterContentWrapper container spacing={3}>
        <Grid item>
          &#169;כל הזכויות שמורות AK Projects {date.getFullYear()}
        </Grid>
      </FooterContentWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled(Box)`
  background-color: #0c2d48;
  position: absolute;

  bottom: 0;

  height: 170px;
  padding: 50px 20px 0 20px;
  font-size: 20px;
  width: 100%;
  font-weight: 800;
  text-align: right;
  @media only screen and (max-width: 411px) {
    height: 250px;
  }
`;
const FooterContentWrapper = styled(Grid)`
  justify-content: center;
  flex-direction: row;
  color: #b1d4e0;
`;
