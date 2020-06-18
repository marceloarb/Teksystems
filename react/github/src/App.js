import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    counters: [
      { id: "bike", value: 0 },
      { id: "car", value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("I am calling the function");
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    console.log("im here on increment");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onRESET={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
