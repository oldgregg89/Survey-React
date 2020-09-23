import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
//import firebase from "firebase/app";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Container style={{ backgroundColor: 'blue', marginTop: '150px' }}>
        <SurveyControl />
      </Container>
    </React.Fragment>
  );
}

export default App;