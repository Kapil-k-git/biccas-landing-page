import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Rating } from '@mui/material';

const useStyles = makeStyles({
  support: {
    background: '#F9F8FE',
    maxWidth: "1440px",
    minHeight: "475px",
    textAlign: 'center',
    paddingTop: "40px",
    "@media (max-width: 1366px)": {
       padding: '2.5rem 5rem',
    },
    '@media (max-width: 1024px)': {
      padding: '2.5rem 5rem',
    },
    '@media (max-width: 768px)': {
      padding: '2rem 1.5rem',
    },
  },
  container: {
    maxWidth: '1200px',
    height: 'auto',
    margin: '0 auto',
    marginTop: '4px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '27px',
    alignItems: 'start',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  leftSection: {
    textAlign: 'left',
    width: '650px',
    '@media (max-width: 1024px)': {
      textAlign: 'center',
      width: '100%',
    },
  },
  headingText: {
    fontWeight: '600 !important',
    fontSize: '50px !important',
    marginBottom: '2rem !important',
    '@media (max-width: 1024px)': {
      fontSize: '40px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '32px !important',
    },
  },
  subText: {
    fontSize: '15.9px !important',
    lineHeight: '30px !important',
    color: '#A6A6A6',
    '@media (max-width: 1024px)': {
      fontSize: '14px !important',
      lineHeight: '28px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '13px !important',
      lineHeight: '24px !important',
    },
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.875rem',
    '@media (max-width: 1024px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '1rem',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  rating: {
    display: 'flex',
    gap: '2rem',
    marginTop: '3rem',
    '@media (max-width: 1024px)': {
      gap: '1rem',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      marginTop: '1.5rem',
    },
  },
  starsRating: {
    marginTop: '1.125rem !important',
    fontSize: '20px !important',
    '@media (max-width: 1024px)': {
      fontSize: '18px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '16px !important',
    },
  },
  ratingText: {
    marginTop: '1.125rem !important',
    fontSize: '18px !important',
    color: '#A6A6A6 !important',
    fontWeight: '700 !important',
    '@media (max-width: 1024px)': {
      fontSize: '16px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px !important',
    },
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  imageContainer: {
    marginTop: '14px !important',
    minWidth: '60px !important',
    height: '60px !important',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 9px 0px #0000000D',
    '& img': {
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 1024px)': {
      margin: '0 auto !important',
    },
  },
  cardContent: {
    textAlign: 'left',
    gap: '10px',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1024px)': {
      textAlign: 'center',
    },
  },
  cardTitle: {
    fontWeight: '600 !important',
    fontSize: '28px !important',
    marginBottom: '0.25rem',
    '@media (max-width: 1024px)': {
      fontSize: '24px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '20px !important',
    },
  },
  cardText: {
    fontSize: '18px !important',
    lineHeight: '30px !important',
    color: '#A6A6A6',
    '@media (max-width: 1024px)': {
      fontSize: '16px !important',
      lineHeight: '28px !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '14px !important',
      lineHeight: '24px !important',
    },
  },
});

const Support: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.support}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.leftSection}>
            <Typography
              variant="h4"
              className={classes.headingText}
            >
              How we support our partner all over the world
            </Typography>
            <Typography variant="body2" className={classes.subText}>
              SaaS has become a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software.
            </Typography>
            <div className={classes.rating}>
              <div>
                <Rating
                  name="rating1"
                  value={4.9}
                  readOnly
                  size="large"
                  precision={0.1}
                />
                <Typography variant="body1" className={classes.starsRating}>
                  <strong>4.9 </strong> / 5 rating
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.ratingText}>
                  databricks
                </Typography>
              </div>
              <div>
                <Rating
                  name="rating2"
                  value={4}
                  readOnly
                  size="large"
                  precision={0.1}
                />
                <Typography variant="body1" className={classes.starsRating}>
                  <strong>4.8 </strong> / 5 rating
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.ratingText}>
                  Chainalysis
                </Typography>
              </div>
            </div>
          </div>

          <div className={classes.rightSection}>
            <div className={classes.card}>
              <div className={classes.imageContainer}>
                <img src="./images/support/publish.png" alt="Publishing" />
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Publishing
                </Typography>
                <Typography variant="body2" className={classes.cardText}>
                  Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.
                </Typography>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.imageContainer}>
                <img src="./images/support/analytics.png" alt="Analytics" />
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Analytics
                </Typography>
                <Typography variant="body2" className={classes.cardText}>
                  Analyze your performance and create gorgeous reports.
                </Typography>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.imageContainer}>
                <img src="./images/support/engagement.png" alt="Engagement" />
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Engagement
                </Typography>
                <Typography variant="body2" className={classes.cardText}>
                  Quickly navigate and engage with your audience.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
