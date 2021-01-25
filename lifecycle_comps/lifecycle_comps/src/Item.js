import React from "react";

const Error = ({ error }) => (error ? <strong>{error}</strong> : null);
const Loading = ({ loading }) => (loading ? <em>{loading}</em> : null);
const Cancel = ({ loading, onClick }) =>
  (loading ? 
  (<a href="#" onClick={onClick}>Close App</a>) : 
  null)


export default ({ error, loading, userList, onClickCancel }) => (
  <div>
    <strong><span><u>Item: </u></span></strong> <br></br>
    Error: <Error error={error} /> <br></br>
    Loading: <Loading loading={loading} />
    <ul>
      {userList.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
    <Cancel loading={loading} onClick={onClickCancel} />
  </div>
);