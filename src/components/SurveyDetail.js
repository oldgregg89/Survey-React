import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";



function SurveyDetail(props){

  const { survey, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Survey Details</h1>
      <h3>Name: {keg.names}</h3>
      <p><em>Question1:{keg.question1}</em></p>
      <p><em>Question2:{keg.question2}</em></p>
      <p><em>Question3:{keg.question3}</em></p>
      <p><em>Question4:{keg.question4}</em></p>
      <p><em>Question5:{keg.question5}</em></p>

      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Edit Survey</Button>
      <Button variant="danger" onClick={() => onClickingDelete(survey.id) }>Delete Survey</Button>
      <hr/>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default SurveyDetail;