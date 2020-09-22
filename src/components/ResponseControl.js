import React from "react";
import Response from "./Response";
import Button from 'react-bootstrap/Button';

export default class ResponseControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formvisableOnPage: false,
        masterResponseList: [],
        selectedResponse: null,
        editing: false,
      };
    }

    handleClick = () => {
        if (this.state.selectedSurvey != null) {
          this.setState({
            formVisibleOnPage: false,
            selectedSurvey: null,
            editing: false
            });
        } else {
          this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
          }));
        }
      }
}