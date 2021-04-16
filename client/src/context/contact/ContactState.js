import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACT,
  // CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: 1,
        name: "Ac Carter",
        email: "carter@gmail.com",
        phone: "9876543210",
        type: "personal",
      },
      {
        _id: 2,
        name: "Sara Watson",
        email: "watson@gmail.com",
        phone: "546789125",
        type: "personal",
      },
      {
        _id: 3,
        name: "Harry Dell",
        email: "carter@gmail.com",
        phone: "9876543210",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
