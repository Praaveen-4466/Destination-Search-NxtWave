import React, { Component } from "react";

import "./index.css";

const DestinationItem = (props) => {
  const { destinationItemDetails } = props;
  const { imgUrl, name } = destinationItemDetails;

  return (
    <div className="container">
      <img src={imgUrl} alt={name} className="img-container" />
      <p className="paragraph">{name}</p>
    </div>
  );
};

export default DestinationItem;
