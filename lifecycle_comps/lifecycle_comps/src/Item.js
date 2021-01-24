import React from "react";

const Error = ({ error }) => (error ? <strong>{error}</strong> : null);
const Loading = ({ loading }) => (loading ? <em>{loading}</em> : null);
const Cancel = ({ loading, onClick }) =>
  loading ? (
    <a href="#" onClick={onClick}>
      Cancel
    </a>
  ) : null;

export default ({ error, loading, user, onClickCancel }) => (
  <div>
    <Error error={error} />
    <Loading loading={loading} />
    <ul>
      {/* {user.map(i => (
        <li key={i.id}>{i.name}</li>
      ))} */}
      {user}
    </ul>
    <Cancel loading={loading} onClick={onClickCancel} />
  </div>
);