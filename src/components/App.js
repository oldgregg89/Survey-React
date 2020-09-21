import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import Container from 'react-bootstrap/Container';

function App(){
  return (
    <React.Fragment>
        <Header />
      <Container style={{backgroundColor: 'blue', marginTop: '150px'}}>
        <SurveyControl />
      </Container>
    </React.Fragment>
  );
}

export default App;