import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Element = props => {
  const { id, text } = props;
  return <span key={id}>{text}</span>;
};

const Person = props => {
  const { id, name, lastName, age, ageSort, showFullName, deleteUser } = props;
  return (
    <li key={id}>
      <Element key={`name-${id}`} id={id} text={name} />
      {showFullName ? (
        <Element key={`last-name-${id}`} id={id} text={lastName} />
      ) : (
        ""
      )}
      {ageSort ? <Element key={`age-${id}`} id={id} text={age} /> : ""}
      <button
        key={`button-${id}`}
        className="myButton"
        value={id}
        onClick={deleteUser}
      >
        Usuń
      </button>
    </li>
  );
};

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
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            lastName={person.lastName}
            age={person.age}
            ageSort={this.state.ageSort}
            showFullName={this.state.showFullName}
            deleteUser={this.handleDelete}
          />
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
