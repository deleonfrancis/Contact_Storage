import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

function Contacts() {
  // git us access to any state or actions associated with ContactState
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (<>
      {contacts.map(contact => <h3>{contact.name}</h3> )}
  </>);
}

export default Contacts;
