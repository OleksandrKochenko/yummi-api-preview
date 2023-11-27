import { Button } from '@mui/material';
import background from '../images/pexels-lukas-616401.jpg';
import { ColorRing } from 'react-loader-spinner';
import { useState } from 'react';

export const App = () => {
  const [spinner, setSpinner] = useState(false);

  const handleDocsButton = () => {
    setSpinner(true);
    window.location.href = 'https://yummy-pet-project.onrender.com/api-docs';
  };

  const handleReadMeButton = () => {
    setSpinner(true);
    window.location.href =
      'https://github.com/OleksandrKochenko/yami-backend/blob/main/README.md';
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 style={{ fontSize: 40 }}>Recipes REST API documentation page</h1>
      <p style={{ fontSize: 30, textAlign: 'center' }}>
        Thanks for visiting this page. <br /> API documentation is placed on
        free instance web service. <br /> It needs time to load, because of spin
        down with inactivity
      </p>
      <p style={{ fontSize: 30, textAlign: 'center' }}>
        You may probably wait for loading more then usually <br />
        or receive a 504 Gateway Timeout error. <br />
        If so, please just retry the request
      </p>
      <div
        style={{
          display: 'flex',
          margin: 30,
        }}
      >
        <Button
          variant="outlined"
          style={{
            border: '3px solid black',
            fontWeight: 700,
            fontSize: 24,
            marginRight: 30,
            color: 'black',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
          onClick={handleDocsButton}
        >
          View API docs
        </Button>
        <Button
          variant="outlined"
          style={{
            border: '3px solid black',
            fontWeight: 700,
            fontSize: 24,
            color: 'black',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
          onClick={handleReadMeButton}
        >
          View Read Me
        </Button>
      </div>
      <ColorRing
        visible={spinner}
        height="160"
        width="160"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          marginTop: '-80px',
          marginLeft: '-80px',
        }}
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
