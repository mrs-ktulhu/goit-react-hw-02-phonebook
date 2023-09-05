import React from 'react';
import '../ContactList/ContactList.css'

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, text, number }) => (
      <li key={id}>
        <span>{text}</span>:&nbsp;         
        <span>{number}</span>
      </li>
    ))}
  </ul>
);

export default ContactList;