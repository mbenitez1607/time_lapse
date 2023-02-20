/*import React from "react";
import { BrowserRouter } from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <PageContainer />
        </BrowserRouter>
    )
}

*/

import logo from './img/mainImg/logo1.png';
//import './App.css';
import { useAuth } from './auth';
import { useEffect, useRef, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as apiService from './api-service';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/Pages/landingPage';
import PageContainer from './components/PageContainer';
import Homepage from './components/Pages/Homepage';

function App() {
  const { user, loading } = useAuth();
  const [dataState, setDataState] = useState(undefined);
  const secureNoteRef = useRef(undefined);

  useEffect(() => {
    (async () => {
      if (!loading) {
        if (user) {
          setDataState('loading');
          const userIdToken = await user.getIdToken();
          try {
            const { secureNote } =
              await apiService.getUserData({
                userIdToken,
                userId: user.uid,
              });
            secureNoteRef.current = secureNote;
            setDataState('success');
          } catch {
            setDataState('error');
          }
        }
      }
    })();
  }, [user, loading]);

  const child = loading ? (
    <></>
  ) : user ? (
    dataState === 'loading' ? (
      <Typography>Getting your data...</Typography>
    ) : dataState === 'error' ? (
      <Typography>An error occured.</Typography>
    ) : dataState === 'success' ? (
/*
      <div>
        <Typography variant="h6">Secure note</Typography>
        <Typography>{secureNoteRef.current}</Typography>
      </div>
*/
      // If there's an active user, add landing page to `child`
      <Homepage />

    ) : undefined
  ) : (
    <div>
{
      <>
      <Typography>You're not signed in</Typography>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Button LinkComponent={Link} to="/signin">
          Sign in
        </Button>
        <Button
          LinkComponent={Link}
          to="/signup"
          sx={{ marginLeft: 2 }}
        >
          Sign up
        </Button>
      </Box>
      </>
}
      {/* Before sign in / sign up, show landing page */}
      <Header />
      {<LandingPage />}
      <Footer />
    </div>
  );
  return (
    <div>
      {child}
    </div>
/*
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
    </div>
*/
  );
}

export default App;
