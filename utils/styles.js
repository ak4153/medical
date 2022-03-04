import { makeStyles } from '@material-ui/core';
import { keyframes } from 'styled-components';

const useStyles = makeStyles({
  content: {
    backgroundColor: '#DBE8E1',
    textAlign: 'right',
    position: 'relative',
  },
  colorDividerTop: {
    backgroundColor: '#DBE8E1',
    width: '100%',
    clipPath:
      'polygon(0 0,100% 0,100% calc(100% - 50px),50% 100%,0 calc(100% - 50px))',
  },
  colorDividerBottom: {
    backgroundColor: '#E9EAE0',
    width: '100%',
    clipPath: 'polygon(0 0,50% 50px,100% 0,100% 100%,0 100%)',
    marginTop: '-50px',
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  section: {
    height: 75,
    flexGrow: 1,
  },
  footerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#B1D4E0',
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#0C2D48',
    bottom: 0,
    height: '170px',
    padding: '50px 20px 0 20px',
    fontSize: '20px',
    width: '100%',
    fontWeight: 800,
    textAlign: 'right',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    flexDirection: 'row-reverse',
  },
  card: {
    width: '100px',
    backgroundColor: '#2E8BC0',
    marginLeft: 50,
    transform: 'translate(0)',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      transform: 'translate(0,-20px)',
      transition: 'all 0.2s  ease-in-out',
    },
  },

  linkColor: {
    '&:hover': {
      animation: '$movingLinks 0.4s ease-in',
    },
  },
  '@keyframes movingLinks': {
    '0%': {
      color: '#0C2D48',
    },
    '100%': {
      color: '#B1D4E0',
    },
  },
  subTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    padding: 0,
  },
});
export default useStyles;

/* 
Red
#E10032

Seafoam Green
#DBE8E1

Dark Blue
#1B4480

Forest Green
#013120






https://www.canva.com/colors/color-palettes/mermaid-lagoon/
Midnight Blue
#145DA0

Dark Blue
#0C2D48

Blue
#2E8BC0

Baby Blue
#B1D4E0
*/
