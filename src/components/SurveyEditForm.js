import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function SurveyEditForm(props) {
  const { survey } = props;

  function handleSurveyEditFormSubmission(event) {
    event.preventDefault();
    props.onSurveyEdit({ name: event.target.names.value, question1: event.target.question1.value, question2: event.target.question2.value, question3: event.target.question3.value, question4: event.target.question4.value, question5: event.target.question5.value, id: survey.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleSurveyEditFormSubmission}
        buttonText="Update Survey" />
    </React.Fragment>
  );
}

SurveyEditForm.propTypes = {
  onSurveyEdit: PropTypes.func
};

export default SurveyEditForm;

// function SurveyEditForm(props){
//   const firestore = useFirestore();

//   function handleSurveyEditFormSubmission(event) {
//   event.preventDefault();
//   props.onSurveyEdit();
//   const propertiesToUpdate = {
//     name: event.target.name.value,
//     question1: event.target.question1.value,
//     question2: event.target.question2.value,
//     question3: event.target.question3.value,
//     question4: event.target.question4.value,
//     question5: event.target.question5.value
//   }
//   return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate)
//   }
// }