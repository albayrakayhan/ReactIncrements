import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server.
    }
  }
  componentWillUnmount() {
    console.log("Counter - UnMount");
  }
  // state = {
  //   value: this.props.counter.value, //Counters.jsx deki degeri okuyoyor.
  // };
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //   return (
  //     <ul>
  //       {/* map kullanimi */}
  //       {this.state.tags.map((t) => (
  //         <li key={t}>{t}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // console.log(this.props);
    console.log("Counter component Rendered");
    return (
      <div>
        {/* {this.props.children} counters.jsx deki Counter component inin altindaki children element in degerini aliyoruz.*/}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please Create a new Tags"}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //return this.state.count === 0 ? "Zero" : this.state.count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
