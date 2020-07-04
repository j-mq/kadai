import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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

  useEffect(() => {
    setCurrentParagraph(paragraph);
  }, [paragraph]);

  const contentNotSaved = () => {
    if (paragraph.text !== currentParagraph.text) {
      return false;
    }
    return true;
  };

  return (
    <div className="my-3">
      <p className="w-100">
        <textarea
          className="no-border form-control no-resize"
          value={currentParagraph.text}
          rows={3}
          onChange={(e) =>
            setCurrentParagraph({
              id: currentParagraph.id,
              text: e.target.value,
            })
          }
        ></textarea>
      </p>

      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary btn-sm mr-1"
          disabled={contentNotSaved()}
          onClick={() =>
            saveThisParagraph(currentParagraph.text, currentParagraph.id)
          }
          // onClick={() =>
          //   saveTitle(
          //     title,
          //     currentPage.mainMenuId,
          //     currentPage.secondMenuId,
          //     currentPage.thirdMenuId
          //   )
          // }
        >
          <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
        </button>
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
