import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles({
  sectionBanner: {
    position: 'relative',
    overflowY: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
    padding: '20px', 
  },
  container: {
    maxWidth: '1180px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse', 
    },
  },
  bannerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    '@media (max-width: 768px)': {
      width: '100%', 
      alignItems: 'center', 
      textAlign: 'center',
    },
  },
  imageContainer: {
    width: '50%',
    '@media (max-width: 768px)': {
      width: '100%', 
      marginTop: '20px',
    },
  },
  image: {
    maxWidth: '100%',
    height: '100% !important',
  },
  heading: {
    fontSize: "70px !important",
    fontWeight: "700 !important",
    color: '#333',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      fontSize: "40px !important", 
    },
  },
  line: {
    marginTop: '20px',
    marginBottom: '30px',
    width: '75%',
    '@media (max-width: 768px)': {
      width: '50%', 
    },
  },
  description: {
    maxWidth: '400px',
    fontSize: '18px',
    color: '#000',
    lineHeight: 1.6,
    marginBottom: '40px !important',
    '@media (max-width: 768px)': {
      maxWidth: '100%', 
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      justifyContent: 'center', 
      flexWrap: 'wrap', 
      gap: '10px',
    },
  },
  trialButton: {
    borderRadius: '50px !important',
    backgroundColor: '#54BD95 !important',
    color: 'white',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease-in',
    '&:hover': {
      backgroundColor: '#2F9870',
    },
  },
  viewDemoButton: {
    marginLeft: '40px !important',
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px',
    borderRadius: '50px !important',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000 !important',
    '@media (max-width: 768px)': {
      marginLeft: '0px !important', 
    },
  },
  viewDemoIcon: {
    marginRight: '8px',
  },
});

const Banner: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.sectionBanner}>
      <div className={classes.container}>
        <div className={classes.bannerContent}>
          <Typography variant="h1" className={classes.heading}>
            We're here to Increase your Productivity
          </Typography>
          <img src="./images/line.png" alt="" className={classes.line} />
          <Typography variant="body1" className={classes.description}>
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </Typography>
          <div className={classes.buttonsContainer}>
            <Button variant="contained" className={classes.trialButton}>
              Try free trial
            </Button>
            <Button className={classes.viewDemoButton}>
              <img
                src="./images/Play.png"
                alt=""
                className={classes.viewDemoIcon}
              />
              View Demo
            </Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src="./images/Frame.png" alt="" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

