import React from "react";

interface StateType { 
  text: string;
  list: string[]; 
};


  class ClassComponent extends React.Component<{}, StateType> {  
  constructor(props: any) {
    super(props);
    this.state = { 
      text: "",
      list: []
    };

    console.log("constructor");

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(event: any) {
    const text = event.target.value;
    this.setState(() => { return { text, list: this.state.list }; });
  }

  handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    event.target.value = "";
  }

  handleSubmit() {
    this.setState((state, props) => {
      return {
        text: "",
        list: [...state.list, state.text]
      }
    });
  }


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
        <div>Current text in state: {this.state.text}</div>
        <form>
          <input type="text" name="inputText" id="inputText" onInput={this.handleInput} onBlur={this.handleBlur} />
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        <div>List in state:{this.state.list.map((item, index) => <p className="list-item" key={index}>{item}</p>)}</div>
      </div>
    );
  }
}

export default ClassComponent;
