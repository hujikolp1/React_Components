
import React from "react";
import Item from "./Item";

export default function ItemList({
  articles,
  onClickToggle,
  onClickRemove
}) {
  return (
    <ul>
      {articles.map(i => (
        <Item
          key={i.id}
          article={i}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}