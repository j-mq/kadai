import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTrashAlt,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import MainContent from "./MainContent/MainContent";

function MainLayout() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10 p-5">
            <MainContent />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
