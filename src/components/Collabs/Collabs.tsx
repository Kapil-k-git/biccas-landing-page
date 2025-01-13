import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  collabs: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "6.25rem",
    position: "relative",
    "@media (max-width: 768px)": {
      paddingBottom: "2rem",
    },
  },
  contentContainer: {
    marginTop: "50px",
    textAlign: "center",
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600 !important",
    marginBottom: "40px !important",
    "@media (min-width: 768px)": {
      fontSize: "32px",
    },
  },
  logosContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    justifyContent: "center",
  },
  logoContainer: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: "100%",
    height: "auto",
  },
});

const Collabs: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.collabs}>
      <div className={classes.contentContainer}>
        <Typography variant="h4" className={classes.heading}>
          More than 25,000 teams use Collabs
        </Typography>
        <div className={classes.logosContainer}>
          <div className={classes.logoContainer}>
            <img
              src="./images/collabs/unsplash.png"
              alt=""
              className={classes.logo}
            />
          </div>
          <div className={classes.logoContainer}>
            <img
              src="./images/collabs/notion.png"
              alt=""
              className={classes.logo}
            />
          </div>
          <div className={classes.logoContainer}>
            <img
              src="./images/collabs/intercom.png"
              alt=""
              className={classes.logo}
            />
          </div>
          <div className={classes.logoContainer}>
            <img
              src="./images/collabs/descript.png"
              alt=""
              className={classes.logo}
            />
          </div>
          <div className={classes.logoContainer}>
            <img
              src="./images/collabs/grammarly.png"
              alt=""
              className={classes.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabs;
