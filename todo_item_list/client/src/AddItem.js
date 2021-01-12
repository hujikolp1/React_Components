import React from "react";

export default function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd
}) {
  return (
    <section>
      <h1>{name}</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} />
      <br></br>
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} />
      <br></br>
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}