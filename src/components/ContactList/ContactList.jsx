import React from 'react';
import '../ContactList/ContactList.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, text, number }) => (
      <li key={id}>
        <span>{text}</span>:&nbsp;         
        <span>{number}</span>&nbsp; 
        <button 
          type='button'
          onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
      
    ))}
  </ul>
);

export default ContactList;