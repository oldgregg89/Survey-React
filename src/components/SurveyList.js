import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.surveyList.map((survey) => 
        <Survey
        whenSurveyClicked = {props.onSurveySelection}
        name = {props.name}
        question1 = {props.question1}
        question2 = {props.question2}
        question3 = {props.question3}
        question4 = {props.question4}
        question5 = {props.question5}
        id = {survey.id}
        key = {survey.id} />
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;




