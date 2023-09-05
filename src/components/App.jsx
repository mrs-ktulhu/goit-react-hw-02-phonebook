import React, { Component } from "react";
import { nanoid } from 'nanoid'
import Phonebook from "./Phonebook/Phonebook";
import ContactList from './ContactList/ContactList';


export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', text: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', text: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', text: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', text: 'Annie Copeland', number: '227-91-26'},
    ],
  }

  handleAddContact = (text, number) => {
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), text, number }, ...prevState.contacts]
    }));
  };
  
  render() {

    return (
      <div>
        <Phonebook onSubmit={this.handleAddContact}/>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
};