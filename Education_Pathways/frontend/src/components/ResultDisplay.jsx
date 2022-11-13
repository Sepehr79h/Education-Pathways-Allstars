import React, { Component } from "react";
import axios from 'axios'
import Result from './Results'
import './css/Result.css'
import Label from './Label'
import "./css/styles.css";
import SticktoTop from "./SticktoTop";

let isVisible = false;
class SearchResultDisplay extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      results: [],
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value }, () => {
      if (this.state.input && (this.state.input).length > 1)
        this.getData(this.state.input);
        this.setState({ isVisible: false})
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData(this.state.input)
  }

  getData = (input) => {
    axios.get(`${process.env.REACT_APP_API_URL}/searchc?input=${input}`)
      .then(res => {
        console.log("course data")
        console.log(res.data)
        console.log(`it is ${res.status}`)

        if (res.status === 200) {
          this.setState({ results: [] })
          if (res.data.length > 0) {
            isVisible = true;
            let len = res.data.length
            let result_temp = []
            for (let i = 0; i < len; i++) {
              result_temp.push(<Result course_code={res.data[i].code} course_name={res.data[i].name}></Result>)
            }
            this.setState({ results: result_temp })
            this.setState({ message: `${res.data.length} courses found for '${input}'`})
          } else if (res.data.length === 0) {
            isVisible = false;
            this.setState({ message: `No courses found for '${input}'`})
          } else {
            let result_temp = []
            result_temp.push(<Label></Label>)
            result_temp.push(<Result course_code={res.data.course.code} course_name={res.data.course.name}></Result>)
            this.setState({ results: result_temp })
            this.setState({ message: "" })
          }
        } else if (res.status === 400) {
          alert("System Error. Please refresh")
        }
      }).catch(
        err => {
          console.log(err)
        }
      )
  }

  render() {
    return (
      <div className="SearchQuery">
        <div style={{ marginTop: "10%", zIndex:'200', position:'relative'}}>
          
          <SticktoTop>
            <h1> Education Pathways</h1>
            <br></br>
            <form onSubmit={this.handleSubmit} className={"search"}>
              <input placeholder={"Search for course code, course name, keyword ..."} className={"text-input"} type="text" value={this.state.input} onChange={this.handleChange} />
              <div className="submit-button-wrapper">
                <input type="submit" value="Search" className={"submit-button"} />
              </div>
            </form>
            <div className={"search-result-message"} >
              {this.state.message}
            </div>
            {isVisible && (
              <Label ></Label>
            )}
          </SticktoTop>
        </div>
        
        <div className={"search-result-display"} >
          {this.state.results}
        </div>
      </div>
    );
  }
}

export default SearchResultDisplay;
