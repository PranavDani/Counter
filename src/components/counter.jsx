import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   // count: 0,
  //   count: this.props.counter.value,
  //   // imageURL: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   // console.log("Increment Clicked", this);
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    // console.log("props", this.props);

    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm btn-2 m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please Create a Tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
