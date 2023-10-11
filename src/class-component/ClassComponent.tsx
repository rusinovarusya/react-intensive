import React from "react";

interface StateType { text: string };

  class ClassComponent extends React.Component<{}, StateType> {  
  constructor(props: any) {
    super(props);
    this.state = { text: "" };

    console.log("constructor");
  }

  componentDidMount() {
    this.setState((state, props) => {
      return { text: state.text + "some text" };
    });

    console.log("componentDidMount");
  }

  componentDidUpdate(/*prevProps, prevState, snapshot*/) {
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
          <input type="text" name="inputText" id="inputText" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassComponent;
