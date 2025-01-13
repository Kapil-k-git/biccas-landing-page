import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  section: {
    position: "relative",
    zIndex: 9,
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "6.125rem 0 5.5rem",
    "@media (max-width: 768px)": {
      padding: "0 0 2rem",
    },
  },
  contentWrapper: {
    display: "flex",
    gap: "113px",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: "0 5px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
      padding: "0 15px",
    },
  },
  titleWrapper: {
    textAlign: "center",
    color: "#191A15",
    minWidth: "331px",
  },
  title: {
    textAlign: "left",
    fontSize: "50px !important",
    fontWeight: "600 !important",
    lineHeight: "60.51px !important",
    "@media (max-width: 768px)": {
      fontSize: "32px !important",
      lineHeight: "40px !important",
      textAlign: "center",
    },
  },
  descriptionWrapper: {},
  description: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "30px !important",
    color: "#A6A6A6 !important",
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
      lineHeight: "24px !important",
      textAlign: "center",
    },
  },
  buttonWrapper: {
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "80px",
    position: "relative",
    zIndex: 9,
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  featureCard: {
    padding: "5px",
    textAlign: "left",
    "@media (max-width: 768px)": {
        maxWidth: "75%",
        margin: "0 auto",
        textAlign: "center"
    },
  },
  featureImg: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
  },
  featureContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "@media (max-width: 768px)": {
        gap: "10px",
    }
  },
  featureTitle: {
    fontSize: "30px !important",
    lineHeight: "30px !important",
    fontWeight: "600 !important",
    color: "#191A15 !important",
    marginTop: "5px",
    "@media (max-width: 768px)": {
      fontSize: "20px !important",
      lineHeight: "30px !important",
    }
  },
  featureDescription: {
    marginTop: "3px",
    color: "#a6a6a6",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
      lineHeight: "24px !important",
    }
  },
  getStartedButton: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "30px !important",
    backgroundColor: "#54BD95",
    border: "none",
    color: "#fff",
    borderRadius: "9999px",
    padding: "16px 30px",
    transition: "ease-in 0.3s",
    "&:hover": {
      backgroundColor: "#2F9870",
    },
    "@media (max-width: 768px)": {
      fontSize: "14px !important",
      lineHeight: "24px !important",
    }
  },
});

const Features: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <div className={classes.titleWrapper}>
            <Typography variant="h4" className={classes.title}>
              Our Features you can get
            </Typography>
          </div>
          <div className={classes.descriptionWrapper}>
            <Typography color="textSecondary" className={classes.description}>
              We offer a variety of interesting features that you can help
              increase your productivity at work and manage your project easily.
            </Typography>
          </div>
          <div className={classes.buttonWrapper}>
            <button className={classes.getStartedButton}>Get Started</button>
          </div>
        </div>

        <div className={classes.gridContainer}>
          <div className={classes.featureCard}>
            <img
              src="./images/features/collabs.png"
              className={classes.featureImg}
              alt="Collaboration"
            />
            <div className={classes.featureContent}>
              <Typography variant="h6" className={classes.featureTitle}>
                Collaboration Teams
              </Typography>
              <Typography className={classes.featureDescription}>
                Here you can handle projects together with your team virtually.
              </Typography>
            </div>
          </div>
          <div className={classes.featureCard}>
            <img
              src="./images/features/cloud.png"
              className={classes.featureImg}
              alt="Cloud Storage"
            />
            <div className={classes.featureContent}>
              <Typography variant="h6" className={classes.featureTitle}>
                Cloud Storage
              </Typography>
              <Typography className={classes.featureDescription}>
                No need to worry about storage because we provide storage up to
                2 TB.
              </Typography>
            </div>
          </div>
          <div className={classes.featureCard}>
            <img
              src="./images/features/analytics.png"
              className={classes.featureImg}
              alt="Daily Analytics"
            />
            <div className={classes.featureContent}>
              <Typography variant="h6" className={classes.featureTitle}>
                Daily Analytics
              </Typography>
              <Typography className={classes.featureDescription}>
                We always provide useful information to make it easier for you
                every day.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
