import { FC, PropsWithChildren } from "react";

const List: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <p>List in state:</p>
      <ul>{children}</ul>
    </>
  );
}

export default List;
