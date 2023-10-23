import React from "react";
import List from "../list/List";
import Item from "../item/Item";

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
  }


  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({text: e.target.value, list: [...this.state.list]});
  }

  handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          <input type="text" name="inputText" id="inputText" value={this.state.text} onChange={this.handleInput} />
          <button type="button" onClick={this.handleSubmit} disabled={this.state.text === "реакт"}>Submit</button>
        </form>
        <List>{this.state.list.map((item, index) => <Item key={index} content={item}/>)}</List>
      </div>
    );
  }
}

export default ClassComponent;
