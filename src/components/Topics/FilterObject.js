import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor(){
    super();
    this.state = {
      friends: [
        {
          name: 'Perry Slaton',
          age: 29,
          jobTitle: 'Building Attendent',
          powers: ['laser eyes', 'being weird']
        },
        {
          name: 'Toby Lasco',
          age: 25,
          jobTitle: 'Programmer', 
          skills: ['being cool', 'coding']
        },
        {
          name: 'Amelia Grace',
          age: 25,
          jobTitle: 'Receptionist', 
          gender: 'Female'
        }
      ],

      userInput: '',
      filteredFriends: []
    }
  }

  handleChange(v) {
    this.setState({userInput:v});
  }

  filteredFriends(prop) {
    let friends = this.state.friends;
    let filteredFriends = [];

    for (let i = 0; i < friends.length; i++) {
      if ( friends[i].hasOwnProperty(prop) ) {
        filteredFriends.push(friends[i]);
      }
    }
    this.setState({ filteredFriends: filteredFriends });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.friends, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filteredFriends(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFriends, null, 10) } </span>
      </div>
    )
  }
}