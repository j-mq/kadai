import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import Paragraphs from "./Paragraphs/Paragraphs";

const MainContent = () => {
  return (
    <div>
      <div>
        <h1 className="display-4">Title</h1>
        <div className="text-right">
          <div className="btn-group">
            <button type="button" className="btn btn-primary btn-sm mr-1">
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <Paragraphs />
      <div className="text-center">
        <button type="button" className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
