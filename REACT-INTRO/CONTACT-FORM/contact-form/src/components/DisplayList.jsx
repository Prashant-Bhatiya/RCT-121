import axios from "axios";
import React, { Component } from "react";
import styles from "./DisplayList.module.css";

export class DisplayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [],
      Click: false,
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

  HandleClick = (e) => {
    this.setState({
      Click: !this.state.Click,
    });
  };

  render() {
    const contactList = this.state.contactList;
    return (
      <div>
        {contactList.length
          ? contactList.map((contactList) => (
              <div key={contactList.id}>
                <h3 className={styles.List} onClick={this.HandleClick}>
                  {contactList.id} . {contactList.name} <br />{" "}
                  {contactList.email} <br />
                  {this.state.Click ? contactList.number : null}
                </h3>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DisplayList;
