import { FC } from "react";

interface ItemProps {
  content: string;
}

const Item: FC<ItemProps> = ({ content }) => {
  return (
    <li>{content}</li>
  );
}

export default Item;
