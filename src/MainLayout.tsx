import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

function MainLayout() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10 p-5">
            <div>
              <h1 className="display-4">Title</h1>
              <div className="text-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary btn-sm mr-1">
                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="text-right">
                <button type="button" className="btn btn-primary btn-sm">
                  <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <hr />
            {/* <button type="button" className="btn btn-primary">
              Primary
              <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </button>
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-primary">
              Primary
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
