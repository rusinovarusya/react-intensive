import { FC, PropsWithChildren } from "react";

const List: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <p>List in state:</p>
      <ul className="list-container">{children}</ul>
    </>
  );
}

export default List;
