import React from "react";
import { Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appBar: {
    color: "white",
    maxWidth: "1180px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "96px",
    padding: "16px",
    flexDirection: "row",
    boxShadow: "none",
    position: "relative",
    "@media (max-width: 1366px)": {
      padding: "15px 60px !important",
    },
    "@media (max-width: 1024px)": {
      padding: "15px 40px !important",
    },
    "@media (max-width: 768px)": {
      padding: "10px 30px !important",
      flexDirection: "row",
      gap: "10px",
    },
    "@media (max-width: 540px)": {
      padding: "10px 15px !important",
      gap: "8px",
    },
    "@media (max-width: 360px)": {
      padding: "8px 10px !important",
    },
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  logo: {
    fontFamily: "Inter, sans-serif",
    fontSize: "30px !important",
    fontWeight: "700 !important",
    color: "#54BD95",
    "@media (max-width: 1024px)": {
      fontSize: "26px",
    },
    "@media (max-width: 768px)": {
      fontSize: "24px",
    },
    "@media (max-width: 540px)": {
      fontSize: "22px",
    },
    "@media (max-width: 360px)": {
      fontSize: "18px",
    },
  },
  tabContainer: {
    display: "flex",
    gap: "50px",
    flex: 2,
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      gap: "30px",
    },
    "@media (max-width: 768px)": {
      gap: "12px",
    },
    "@media (max-width: 540px)": {
      display: "none",
    },
  },
  homeTabs: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#333",
    },
    "@media (max-width: 1024px)": {
      fontSize: "0.95rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
  tabs: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#A6A6A6",
    textDecoration: "none",
    cursor: "pointer",
    "@media (max-width: 1024px)": {
      fontSize: "0.95rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
  buttons: {
    display: "flex",
    gap: "10px",
    "@media (max-width: 1024px)": {
      gap: "8px",
    },
    "@media (max-width: 768px)": {
      gap: "6px",
    },
    "@media (max-width: 540px)": {
      gap: "4px",
    },
    "@media (max-width: 360px)": {
      flexDirection: "row",
      gap: "6px",
    },
  },
  button: {
    fontWeight: "600",
    borderRadius: "20px",
    padding: "8px 20px",
    "@media (max-width: 1024px)": {
      padding: "6px 18px",
    },
    "@media (max-width: 768px)": {
      padding: "6px 15px",
    },
    "@media (max-width: 540px)": {
      padding: "5px 12px",
    },
    "@media (max-width: 360px)": {
      padding: "5px 10px",
    },
  },
  login: {
    backgroundColor: "transparent",
    color: "#A6A6A6 !important",
    borderRadius: "12px !important",

    "&:hover": {
      color: "#A6A6A6 !important",
    },
  },
  signup: {
    marginLeft: "20px !important",
    backgroundColor: "#54BD95 !important",
    color: "#fff",
    borderRadius: "12px !important",
    "&:hover": {
      backgroundColor: "#2F9870 !important",
    },
    "@media (max-width: 768px)": {
      marginLeft: "10px !important",
    },
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <div className={classes.logoContainer}>
        <Typography className={classes.logo}>Biccas</Typography>
      </div>

      <div className={classes.tabContainer}>
        <Typography className={classes.homeTabs}>Home</Typography>
        <Typography className={classes.tabs}>Product</Typography>
        <Typography className={classes.tabs}>FAQ</Typography>
        <Typography className={classes.tabs}>Blog</Typography>
        <Typography className={classes.tabs}>About Us</Typography>
      </div>

      <div className={classes.buttons}>
        <Button className={`${classes.button} ${classes.login}`}>Login</Button>
        <Button
          className={`${classes.button} ${classes.signup}`}
          variant="contained"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
