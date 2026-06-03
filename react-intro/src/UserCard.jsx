import React from "react";

const UserCard = (props) => {
  return (
    <div className="shadow border">
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
};

export default UserCard;
