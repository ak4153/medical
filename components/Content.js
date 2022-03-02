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
        <Grid item className={classess.section}></Grid>

        <SlideshowContainerWrapper
          item
          style={{ paddingLeft: '25px', paddingRight: '25px' }}
          className={(classess.section, classess.colorDividerTop)}
          xs={12}
        >
          <Slideshow></Slideshow>
        </SlideshowContainerWrapper>
        <GridCardContainer container>
          <Grid item>
            <CardWrapper>
              <CardMedia
                component="img"
                height="100"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.evidentlycochrane.net%2Fwp-content%2Fuploads%2F2016%2F02%2FiStock_nursepatient_Medium-e1455016519704.jpg&f=1&nofb=1"
                alt="costumer"
              />
              <CardContent>
                <p>אחות לילה</p>
              </CardContent>
            </CardWrapper>
          </Grid>

          <Grid item>
            <CardWrapper>
              <CardMedia
                component="img"
                height="100"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs.ed.ac.uk%2Fbulletin-magazine%2Fwp-content%2Fuploads%2Fsites%2F1304%2F2020%2F11%2F2958-scaled.jpg&f=1&nofb=1"
                alt="costumer"
              />

              <CardContent>
                <p>אחות לאחר ניתוח</p>
              </CardContent>
            </CardWrapper>
          </Grid>
          <Grid item>
            <CardWrapper>
              <CardContent>
                <p>מטפלת סיעודית</p>
              </CardContent>
              <CardMedia
                component="img"
                height="100"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F1707%2F24978997901_3a1d1ed567_b.jpg&f=1&nofb=1"
                alt="costumer"
              />
            </CardWrapper>
          </Grid>

          <Grid item>
            <CardWrapper>
              <CardContent>
                <p>אחות פרטית</p>
              </CardContent>
              <CardMedia
                component="img"
                height="100"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F8610%2F16384414998_3deb931407_b.jpg&f=1&nofb=1"
                alt="costumer"
              />
            </CardWrapper>
          </Grid>
        </GridCardContainer>
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
        ></Grid>
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
  border-top: 1px #05445e solid;

  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: row-reverse;
  p {
    font-weight: 800;
    font-size: 20px;
    margin: 0;
  }
`;
export default dynamicSSR(Content);
