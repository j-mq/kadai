import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IParagraph } from "../../dataModels";

export interface Props {
  paragraphs: IParagraph[];
}

const Paragraphs: React.FC<Props> = ({ paragraphs }) => {
  return (
    <Fragment>
      {paragraphs.map((pa) => (
        <div className="my-3">
          <p>{pa.content}</p>
          <div className="text-right">
            <button type="button" className="btn btn-primary btn-sm">
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
          </div>
          <hr />
        </div>
      ))}
    </Fragment>
  );
};

export default Paragraphs;
