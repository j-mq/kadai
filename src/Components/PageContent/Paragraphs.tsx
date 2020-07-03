import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IParagraph } from "../../dataModels";

export interface Props {
  paragraphs: IParagraph[];
}

const Paragraphs: React.FC<Props> = ({ paragraphs }) => {
  return (
    <div className="my-3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="text-right">
        <button type="button" className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Paragraphs;
