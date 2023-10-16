import React from "react";

interface PropsType {
  content: string;
}


class ChildrenComponent extends React.Component<PropsType> {
  render(): React.ReactNode {
    return (
      <p className="list-item">{this.props.content}</p>
    )
  }
}

export default ChildrenComponent;
