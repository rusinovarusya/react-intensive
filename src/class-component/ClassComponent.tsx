import React from "react";

interface StateType { text: string };

  class ClassComponent extends React.Component<{}, StateType> {  
  constructor(props: any) {
    super(props);
    this.state = { text: "" };

    console.log("constructor");

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event: any) {
    const text = event.target.value;
    this.setState(() => { return { text }; });
  }

  handleSubmit() {}

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps: {}, prevState: StateType) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="class-component">
        text: {this.state.text}
        <form>
          <input type="text" name="inputText" id="inputText" onInput={this.handleInput} />
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassComponent;
