import React, { useState, useEffect } from "react";
import ReactHtml from "raw-html-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { IParagraph } from "../../dataModels";

export interface Props {
  paragraph: IParagraph;
  removeThisParagraph: (paragraphId: number) => void;
  saveThisParagraph: (newParagraph: string, paragraphId: number) => void;
}

const Paragraph: React.FC<Props> = ({
  paragraph,
  removeThisParagraph,
  saveThisParagraph,
}) => {
  const [currentParagraph, setCurrentParagraph] = useState<IParagraph>(
    paragraph
  );

  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    setCurrentParagraph(paragraph);
  }, [paragraph]);

  const contentNotSaved = () => {
    if (paragraph.text !== currentParagraph.text) {
      return false;
    }
    return true;
  };

  const setHtmlAndSave = () => {
    setEditMode(false);
    saveThisParagraph(currentParagraph.text, currentParagraph.id);
  };

  return (
    <div className="my-3">
      <p className="w-100">
        {editMode ? (
          <textarea
            className="form-control no-resize"
            value={currentParagraph.text}
            rows={5}
            onChange={(e) =>
              setCurrentParagraph({
                id: currentParagraph.id,
                text: e.target.value,
              })
            }
          ></textarea>
        ) : (
          <ReactHtml html={`${currentParagraph.text}`}></ReactHtml>
        )}
      </p>

      <div className="text-right">
        {editMode ? (
          <button
            type="button"
            className="btn btn-primary btn-sm mr-1"
            onClick={() => setHtmlAndSave()}
          >
            <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm mr-1"
            onClick={() => setEditMode(true)}
          >
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </button>
        )}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => removeThisParagraph(currentParagraph.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Paragraph;
