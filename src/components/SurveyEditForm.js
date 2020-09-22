import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

// function EditSurveyForm(props){
//   const {survey} = props;
 
 
//  export default EditSurveyForm;
//    function handleEditSurveyFormSubmission(event){
//      event.preventDefault();
//      props.onEditSurvey({names: event.target.names.value, question1: event.target.question1.value, question2: event.target.question2.value, question3: event.target.question3.value, question4: event.target.question4.value, question5: event.target.question5.value, id: survey.id});
//    }
  
//    return (
//      <React.Fragment>
//        <ReusableForm 
//          formSubmissionHandler={handleEditSurveyFormSubmission}
//          buttonText="Update Survey" />
//      </React.Fragment>
//    );
//   }
  
//   EditSurveyForm.propTypes = {
//    onEditSurvey: PropTypes.func
//   };



function EditSurveyForm(props){
  const firestore = useFirestore();

  function handleEditSurveyFormSubmission(event) {
  event.preventDefault();
  props.onEditSurvey();
  const propertiesToUpdate = {
    names: event.target.names.value,
    question1: event.target.question1.value,
    question2: event.target.question2.value,
    question3: event.target.question3.value,
    question4: event.target.question4.value,
    question5: event.target.question5.value
  }
  return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate)
 }
}