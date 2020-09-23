import React from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function Survey(props){

  useFirestoreConnect([
    {collection: 'surveys'}
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  return(
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h3>{props.Name}</h3>
        <p><em>{props.question1}</em></p>
        <p><em>{props.question2}</em></p>
        <p><em>{props.question3}</em></p>
        <p><em>{props.question4}</em></p>
        <p><em>{props.question5}</em></p>
      </div>
    </React.Fragment>
  );
}

Survey.propTypes = {
  Name: PropTypes.string.isRequired,
  Question1: PropTypes.string.isRequired,
  Question2: PropTypes.string.isRequired,
  question3: PropTypes.string.isRequired,
  Question4: PropTypes.string.isRequired,
  Question5: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey;