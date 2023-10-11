import React from "react";

class ClassComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <div className="class-component">
        <form>
          <input type="text" name="inputText" id="inputText" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassComponent;

