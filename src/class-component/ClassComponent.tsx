import React, { createRef } from "react";
import List from "../list/List";
import Item from "../item/Item";

interface StateType { 
  text: string;
  list: string[]; 
};


class ClassComponent extends React.Component<{}, StateType> { 
  private textInput: React.RefObject<HTMLInputElement>; 
  constructor(props: any) {
    super(props);
    this.textInput = createRef();
    this.state = { 
      text: "",
      list: [],
    };

    console.log("constructor");
  }


  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({text: e.target.value, list: [...this.state.list]});
  }

  handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((state, props) => {
      return {
        text: "",
        list: [...state.list, state.text],
      }
    });
  }

  handleFocus = () => {
    this.textInput.current?.focus();
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
          <input type="text" name="inputText" id="inputText" value={this.state.text} onChange={this.handleInput} ref={this.textInput} />
          <button type="button" onClick={this.handleSubmit} disabled={this.state.text === "реакт"}>Submit</button>
          <button type="button" onClick={this.handleFocus}>Focus</button>
        </form>
        <List>{this.state.list.map((item, index) => <Item key={index} content={item}/>)}</List>
      </div>
    );
  }
}

export default ClassComponent;
