import React from 'react';
import Header from '../components/Header/Header';
import Banner from "../components/Banner/Banner";
import Collabs from '../components/Collabs/Collabs';
import Support from '../components/Support/Support';
import Features from '../components/Features/Features';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainSection: {
    position: 'relative',
    '&::before': {
      content: '""',
      backgroundImage: 'url(../../public/images/header-bg.png)',
      height: '100%',
      width: '100%',
      backgroundPosition: 'top',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: '-12px',
      left: '-12px'
    },
    '&::after': {
      content: '""',
      backgroundImage: 'url(../../public/images/header-bg-right.png)',
      height: '70%',
      width: '50%',
      backgroundPosition: 'top',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: '0',
      right: '0'
    }
  }
})

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainSection}>
      <Header />
      <Banner />
      <Collabs />
      <Support />
      <Features />
    </div>
  );
};

export default App;