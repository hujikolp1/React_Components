import React from "react";

export default function AddArticle({
  name,
  title,
  details,
  onChangeTitle,
  onChangedetails,
  onClickAdd
}) {
  return (
    <section>
      <h1>{name}</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} />
      <br></br>
      <input placeholder="details" value={details} onChange={onChangedetails} />
      <br></br>
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}