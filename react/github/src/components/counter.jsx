import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBedgeClasses()}>
          {" "}
          {this.props.counter.value === 0
            ? "Zero"
            : this.props.counter.value}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-nm"
        >
          {" "}
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBedgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
