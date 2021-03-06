import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Col
} from "reactstrap";

var style = {
  marginTop: "7%",
  marginLeft: "15%",
  width: "85%",
  backgroundColor: "rgba(255,255,255,.4)"
};

export class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let questionId = this.props.location.pathname.split("/")[2];
    let question = this.props.questions.find(
      question => question.id == questionId
    );

    return (
      <Card style={style}>
        <CardTitle> {question.title} </CardTitle>
        <CardBody>
          <Form>
            <FormGroup>
              <p> {question.problem_statement} </p>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <textarea cols="125" rows="10" name="text">
                  {question.skeleton}
                </textarea>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Button>Compile</Button> &nbsp;
              <Button>Run</Button> &nbsp;
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Question);
