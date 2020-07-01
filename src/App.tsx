import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Primary
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
