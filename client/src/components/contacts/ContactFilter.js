import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const { filterContacts, clearFilter, filtered } = contactContext;

  const onChangeFilter = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChangeFilter}
      />
    </form>
  );
}

export default ContactFilter;
