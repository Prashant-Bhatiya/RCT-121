import React, { useState } from "react";
import ContactCad from "./ContactCad";

function ContactList() {
  const List = [
    {
      id: "1",
      name: "Prashant",
      email: "prashant@gmail.com",
      number: "+91 9586784989",
    },
    {
      id: "2",
      name: "Gautam",
      email: "gautam@gmail.com",
      number: "+91 9586784988",
    },
    {
      id: "3",
      name: "Dhruv",
      email: "dhruv@gmail.com",
      number: "+91 9586784987",
    },
    {
      id: "4",
      name: "Vishal",
      email: "vishal@gmail.com",
      number: "+91 9586784986",
    },
  ];

  return (
    <div>
      {List.map((e) => {
        return (
          <div key={e.id} >
            <ContactCad name={e.name} email={e.email} number={e.number} />
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
