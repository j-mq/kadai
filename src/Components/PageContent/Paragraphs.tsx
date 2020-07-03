import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IParagraph } from "../../dataModels";
import "./MainContent.styles.css";

export interface Props {
  paragraphs: IParagraph[];
  removeThisParagraph: (paragraphId: number) => void;
}

const Paragraphs: React.FC<Props> = ({ paragraphs, removeThisParagraph }) => {
  return (
    <Fragment>
      {paragraphs.map((pa) => (
        <div className="my-3">
          <p className="w-100">
            <textarea
              className="no-border form-control no-resize"
              defaultValue={pa.text}
              rows={3}
            ></textarea>
          </p>
          <div className="text-right">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => removeThisParagraph(pa.id)}
            >
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
