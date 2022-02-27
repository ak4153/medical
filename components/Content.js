import useStyles from '../utils/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import dynamicSSR from '../utils/dynamicFunction';
import Slideshow from '../components/Slideshow';
import DividerText from './DividerText';
import Tounge from './Tounge';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Content() {
  const [showTounge, setShowTounge] = useState(false);
  const classess = useStyles();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowTounge((prev) => (prev = true));
    } else {
      setShowTounge((prev) => (prev = false));
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className={classess.content}>
      <Tounge showTounge={showTounge}></Tounge>
      <Grid container className={classess.contentContainer}>
        <Grid item className={classess.section}>
          <h1>ברוכים הבאים</h1>
        </Grid>

        <SlideshowContainerWrapper
          item
          style={{ paddingLeft: '25px', paddingRight: '25px' }}
          className={(classess.section, classess.colorDividerTop)}
          xs={12}
        >
          <Slideshow></Slideshow>
        </SlideshowContainerWrapper>

        <Grid
          item
          xs={12}
          style={{ paddingLeft: '50px', paddingRight: '50px' }}
          className={(classess.section, classess.colorDividerBottom)}
        >
          <DividerText></DividerText>
        </Grid>
        <Grid item className={classess.section}>
          תוכן
        </Grid>

        <Grid
          item
          className={(classess.section, classess.colorDividerBottom)}
          xs={12}
        >
          <h1
            style={{
              justifySelf: 'right',
              float: 'right',
              padding: '10px',
              marginRight: '100px',
              paddingTop: '70px',
            }}
          >
            לקוחות מספרים
          </h1>

          <GridCardContainer container>
            <Grid item>
              <CardWrapper>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bridgespan.org%2Fbridgespan%2FImages%2Farticles%2Fexecutive-summary-putting-clients-at-the-center%2Ffour-oaks-two-girls-280x280.png%3Fext%3D.png&f=1&nofb=1"
                  alt="costumer"
                />
                <CardContent>תוכן</CardContent>
              </CardWrapper>
            </Grid>

            <Grid item>
              <CardWrapper>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6F3GxZU97pMeY-OAY-AVTwHaEK%26pid%3DApi&f=1"
                  alt="costumer"
                />

                <CardContent>תוכן</CardContent>
              </CardWrapper>
            </Grid>
            <Grid item>
              <CardWrapper>
                <CardContent>תוכן</CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9IqDCKUuuoYheSJ9M5gayAHaHa%26pid%3DApi&f=1"
                  alt="costumer"
                />
              </CardWrapper>
            </Grid>

            <Grid item>
              <CardWrapper>
                <CardContent>תוכן</CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uV0uFWDIFjafNVbrbLy_UQHaJv%26pid%3DApi&f=1"
                  alt="costumer"
                />
              </CardWrapper>
            </Grid>
          </GridCardContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
const SlideshowContainerWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
`;
const CardWrapper = styled(Card)`
  width: 100px;
  background-color: #2e8bc0;
  margin-left: 50px;
  transform: translate(0);
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translate(0, -20px);
    transition: all 0.2s ease-in-out;
  }
`;
const GridCardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: row-reverse;
`;
export default dynamicSSR(Content);
