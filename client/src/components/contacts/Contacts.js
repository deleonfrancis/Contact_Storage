import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem"

function Contacts() {
  // git us access to any state or actions associated with ContactState
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (<>
      {contacts.map(contact => <ContactItem key={contact.id} contact = {contact} /> )}
  </>);
}

export default Contacts;
