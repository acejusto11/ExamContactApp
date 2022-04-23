import React from "react";
import ContactCard from "../../core/ContactCard/ContactCard";

const ContactList = (props) => {
  const { contacts, onEditContact, onDeleteContact } = props;
  return (
    contacts &&
    contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        contact={contact}
        onEditContact={() => onEditContact(contact.id)}
        onDeleteContact={() => onDeleteContact(contact.id)}
      />
    ))
  );
};

export default ContactList;
