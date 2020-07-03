import React from "react";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThirdMenus = () => {
  return (
    <h6 className="d-flex justify-content-between align-items-center px-3 mb-0">
      <span>3rd Menu</span>
      <div className="text-right">
        <button className="btn btn-sm btn-link text-white p-0">
          <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
        </button>
      </div>
    </h6>
  );
};

export default ThirdMenus;
