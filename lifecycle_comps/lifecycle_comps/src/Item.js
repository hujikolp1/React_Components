import React from "react";

const Error = ({ error }) => (error ? <strong>{error}</strong> : null);
const Loading = ({ loading }) => (loading ? <em>{loading}</em> : null);
const Cancel = ({ loading, onClick }) =>
  loading ? (
    <a href="#" onClick={onClick}>
      Cancel
    </a>
  ) : null;

export default ({ error, loading, users, onClickCancel }) => (
  <div>
    <Error error={error} />
    <Loading loading={loading} />
    <ul>
      {users.map(i => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
    <Cancel loading={loading} onClick={onClickCancel} />
  </div>
);