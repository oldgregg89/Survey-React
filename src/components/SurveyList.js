import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function SurveyList(props) {
  useFirestoreConnect([
    { collection: 'surveys'}
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  if (isloaded(surveys)) {
    return (
      <React.Fragment>
        <hr/>
        {ticket.map((survey) => {
          return <Survey
            whenSurveyClicked = { props.onSurveySelection}
            name = {survey.name}
            question1 = {survey.question1}
            question2 = {survey.question2}
            question3 = {survey.question3}
            question4 = {survey.question4}
            question5 = {survey.question5}
            id = {survey.id}
            key = {survey.id} />
        })}
      </React.Fragment>
    );
  } else {
    return ( 
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;




