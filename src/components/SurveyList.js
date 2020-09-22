import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function SurveyList(props) {
  useFirestoreConnect([
    { collection: 'surveys'}
  ]);
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;




