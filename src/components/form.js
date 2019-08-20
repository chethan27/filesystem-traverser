import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no_of_files: 0,
      max_size: 0,
      avg_size: 0,
      list_of_ext: [],
      max_use_ext: "",
      no_max_ext: 0,
      noferror: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let noferror = "";
     if(!Number.isInteger(this.state.no_of_files)){
        noferror = "enter only number"
     }
     if(noferror){
       this.setState({
         noferror
       })
       console.log("object")
       return false
     }
     return true

  }

  onSubmitStat = e => {
    e.preventDefault();

    const isvalid = this.validate();

    if (isvalid) {
      const statistics = {
        no_of_files: this.state.no_of_files,
        max_size: this.state.max_size,
        avg_size: this.state.avg_size,
        list_of_ext: this.state.list_of_ext,
        max_use_ext: this.state.max_use_ext,
        no_max_ext: this.state.no_max_ext
      };

      console.log("ja", statistics);

      axios
        .post("http://localhost:4000/stats/add", statistics)
        .then(res => console.log(res.data))
        .catch(e => console.log(e));
    }

    this.setState({
      no_of_files: 0,
      max_size: 0,
      avg_size: 0,
      list_of_ext: [],
      max_use_ext: "",
      no_max_ext: 0
    });

    // window.location = "/";
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form>
          <FormGroup>
            <Label style={{ padding: "16px" }}>
              Enter the following details
            </Label>
            <Input
              name="no_of_files"
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="No of files"
              value={this.state.no_of_files === 0 ? "" : this.state.no_of_files}
              onChange={e => this.change(e)}
            />
          </FormGroup>
          <div>
            {this.state.noferror}
          </div>
          <FormGroup>
            <Input
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="Enter max size"
              value={this.state.max_size === 0 ? "" : this.state.max_size}
              onChange={this.change}
            />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="Enter avg size"
              value={this.state.avg_size === 0 ? "" : this.state.avg_size}
              onChange={this.change}
            />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="Enter list of extensions "
              value={this.state.list_of_ext}
              onChange={this.change}
            />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="most used ext"
              value={this.state.max_use_ext}
              onChange={this.change}
            />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ width: "200px", marginLeft: "16px" }}
              placeholder="most used ext No"
              value={this.state.no_max_ext === 0 ? "" : this.state.no_max_ext}
              onChange={this.change}
            />
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
            style={{
              fontSize: "16px",
              borderRadius: "4px",
              backgroundColor: "#3b5998",
              marginLeft: "72px"
            }}
            onClick={e => this.onSubmitStat(e)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
