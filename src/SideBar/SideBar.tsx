import React from "react";
import "./SideBar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar text-white">
      <div className="sidebar-sticky">
        <h4 className="d-flex justify-content-between align-items-center px-3 mb-2">
          <span>Main menu</span>
          <a className="btn btn-sm btn-link text-white">
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </a>
        </h4>
        <h5 className="d-flex justify-content-between align-items-center px-3 mb-1">
          <span>2nd Menu</span>
          <div className="btn-group">
            <a className="btn btn-sm btn-link text-white ">
              <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
            </a>
            <a className="btn btn-sm btn-link text-white ">
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </a>
          </div>
        </h5>
        <h6 className="d-flex justify-content-between align-items-center px-3 mb-0">
          <span>3rd Menu</span>
          <a className="btn btn-sm btn-link text-white">
            <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
          </a>
        </h6>
        <h6 className="d-flex justify-content-between align-items-center px-3 mb-0">
          <span>3rd Menu</span>
          <a className="btn btn-sm btn-link text-white">
            <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
          </a>
        </h6>
      </div>
    </nav>
  );
};

export default SideBar;
