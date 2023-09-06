import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../Phonebook/Phonebook.css';


export default class SignupForm extends Component {

  state = {
    name: '',
    number: '',
  }

  handleChange = e =>{
    this.setState ({[e.currentTarget.name]:e.currentTarget.value});
  }

  handleSubmit = e =>{
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number)
    this.setState({name:'', number:''})
  }

  render() {

    return (
        <div className="container">
            <div className="input_container">
                
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name
                    <br/>
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      id={nanoid()}
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <br/>
                  <label>
                    Number
                    <br/>
                    <input
                      type="tel"
                      placeholder="Enter number"
                      name="number"
                      id={nanoid()}
                      value={this.state.number}
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <br/>
                  <button type="submit" className='btn'>Add contact</button>
                </form>

            </div>

        </div>
    )
  }
}
