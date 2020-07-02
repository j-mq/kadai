import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";

function MainLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-9">
          <button type="button" className="btn btn-primary">
            Primary
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
