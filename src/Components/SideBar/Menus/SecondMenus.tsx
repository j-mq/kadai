import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const SecondMenus = () => {
  return (
    <h5 className="d-flex justify-content-between align-items-center px-3 mb-1">
      <span>2nd Menu</span>
      <div className="btn-group text-right">
        <button className="btn btn-sm btn-link text-white mx-1 p-0">
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </button>
        <button className="btn btn-sm btn-link text-white p-0">
          <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
        </button>
      </div>
    </h5>
  );
};

export default SecondMenus;
