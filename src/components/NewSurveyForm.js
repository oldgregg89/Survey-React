import { useFirestore } from 'react-redux-firebase';
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewSurveyForm(props) {

  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onNewSurveyCreation();

    return firestore.collection('surveys').add(
      {
        name: event.target.name.value,
        question1: event.target.question1.value,
        question2: event.target.question2.value,
        question3: event.target.question3.value,
        question4: event.target.question4.value,
        question5: event.target.question5.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  function handleNewSurveyForm(event) {
    event.preventDefault();
    props.onNewSurveyCreation({ names: event.target.names.value, question1: event.target.question1.value, question2: event.target.question2.value, question3: event.target.question3.value, question4: event.target.question4.value, question5: event.target.question5.value, id: v4() });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addSurveyToFirestore}
        buttonText="Add Survey!" />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;