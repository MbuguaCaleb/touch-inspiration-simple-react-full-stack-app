import React from "react";
import { Link } from "react-router-dom";

function UserComponent({ _id, name, email, occupation, bio }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{occupation}</td>
      <td>{bio}</td>
      <td>
        <Link to={`/edit/${_id}`}></Link>
      </td>
    </tr>
  );
}

export default UserComponent;
