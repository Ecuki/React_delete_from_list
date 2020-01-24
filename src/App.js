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
    ageSort: false,
    showFullName: false
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
  handleShow = e => {
    const element = e.target.name;
    console.log(e.target.name);
    if (element === "ageSort") {
      this.setState({
        ageSort: !this.state[element]
      });
    } else if (element === "showFullName") {
      this.setState({
        showFullName: !this.state[element]
      });
    } else {
      console.log("niepoprwny parametr handleShow");
    }
  };
  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>
            <span key={`span-name-${person.id}`}>{person.name}</span>

            {this.state.showFullName ? (
              <span key={`span-last-name-${person.id}`}>{person.lastName}</span>
            ) : (
              ""
            )}
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
        <button name="ageSort" className="myButton" onClick={this.handleShow}>
          Pokaż wiek
        </button>
        <button
          name="showFullName"
          className="myButton"
          onClick={this.handleShow}
        >
          Pokaż nazwisko
        </button>
      </ul>
    );
  }
}
export default App;
