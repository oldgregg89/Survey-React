import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='names'
            placeholder='Names' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='question1'
            placeholder='Question1.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='question2'
            placeholder='Question2.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='question3'
            placeholder='Question3.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='question4'
            placeholder='Question4.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='question5'
            placeholder='Question5.' />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;