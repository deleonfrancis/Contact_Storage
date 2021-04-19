import React, { useState, useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: " ", email: " ", phone: " ", type: "personal" });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: " ",
    email: " ",
    phone: " ",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      setContact({
        name: " ",
        email: " ",
        phone: " ",
        type: "personal",
      });
    } else {
      updateContact(contact)
      clearCurrent()
    }
  };

  const handleClearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
        <div style={{ margin: "15px 0" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            //   placeholder="Name"
            value={name}
            onChange={onChange}
            style={{ margin: "0" }}
          />
        </div>
        <div style={{ margin: "15px 0" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            //   placeholder="Email"
            value={email}
            onChange={onChange}
            style={{ margin: "0" }}
          />
        </div>
        <div style={{ margin: "15px 0" }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            //   placeholder="Phone"
            value={phone}
            onChange={onChange}
            style={{ margin: "0" }}
          />
        </div>
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />
        Personal{" "}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        Professional
        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
            className="btn btn-primary btn-block"
            onChange={onChange}
          />
        </div>
        {current && (
          <div>
            <button
              className="btn btn-light btn-block"
              onClick={handleClearAll}
            >
              Clear
            </button>
          </div>
        )}
        {/* <input type="submit" value="Submit" /> */}
      </form>
      {/* <form onSubmit={onSubmit}>
        <h2 className="text-primary">Add Contact</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
        />
        Personal
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        Professional
        <div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-primary btn-block"
            onChange={onChange}
          />
        </div>
      </form> */}
    </Fragment>
  );
}

export default ContactForm;
