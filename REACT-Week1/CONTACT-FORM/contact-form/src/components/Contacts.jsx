import React, { Component } from "react";
import axios from "axios";
import DisplayList from "./DisplayList"; 

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",
    };
  }

  HandleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  HandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/contacts", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.HandleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={this.HandleChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter Number"
            onChange={this.HandleChange}
          />
          <button>Submit</button>
        </form>
        <div>
          <DisplayList />
        </div>
      </div>
    );
  }
}

export default Contacts;
