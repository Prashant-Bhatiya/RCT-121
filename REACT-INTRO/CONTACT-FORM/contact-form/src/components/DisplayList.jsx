import axios from "axios";
import React, { Component } from "react";

export class DisplayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/contacts")
      .then((res) => {
        this.setState({
          contactList: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const contactList = this.state.contactList;
    // console.log(contactList);
    return (
      <div>
        DisplayList
        {contactList.length
          ? contactList.map((contactList) => (
              <div key={contactList.id}>
                {contactList.id}.{contactList.name}{" "}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DisplayList;
