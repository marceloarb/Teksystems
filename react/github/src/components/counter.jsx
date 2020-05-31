import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["item1", "item2", "item3"],
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBedgeClasses()}>
          {" "}
          {this.state.count === 0 ? "Zero" : this.state.count}{" "}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-nm"
        >
          {" "}
          Increment
        </button>
        <ul>
          {this.state.tags.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBedgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
