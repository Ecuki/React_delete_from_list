import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Jan", lastName: "Cieślak", age: 23 },
      { id: 2, name: "Darek", lastName: "Cieślak", age: 23 },
      { id: 3, name: "Joanna", lastName: "Nowak", age: 23 },
      { id: 41, name: "Tomasz", lastName: "Kowalski", age: 35 }
    ],
    ageSort: false
  };
  handleDelete = e => {
    let persons = this.state.persons;
    const id = e.target.value;
    persons = persons.filter(person => person.id != id);
    console.log(persons);
    this.setState({
      persons
    });
  };
  handleShowAge = () => {
    const ageSort = this.state.ageSort;
    this.setState({
      ageSort: !ageSort
    });
  };
  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>
            <span key={`span-name-${person.id}`}>
              {person.name} {person.lastName}
            </span>
            {this.state.ageSort ? (
              <span key={`span-age-${person.id}`}> {person.age} </span>
            ) : (
              ""
            )}
            <button
              key={`button-${person.id}`}
              className="myButton"
              value={person.id}
              onClick={this.handleDelete}
            >
              Usuń
            </button>
          </li>
        ))}
        <button className="myButton" onClick={this.handleShowAge}>
          Pokaż wiek
        </button>
      </ul>
    );
  }
}
export default App;
