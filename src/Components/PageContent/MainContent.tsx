import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import Paragraphs from "./Paragraphs";
import { IMenuContent, IParagraph } from "../../dataModels";
import "./MainContent.styles.css";

export interface Props {
  currentPage: IMenuContent | null;
  addParagraph: (
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => void;
  removeParagraph: (
    paragraphId: number,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => void;
}

const PageContent: React.FC<Props> = ({
  currentPage,
  addParagraph,
  removeParagraph,
}) => {
  const [title, setTitle] = useState<string>("Title");
  const [paragraphs, setParagraphs] = useState<IParagraph[]>([]);

  return currentPage ? (
    <div>
      <div>
        <h1>
          {/* {currentPage.title} */}
          <input
            className="no-border"
            type="text"
            value={currentPage.title}
          ></input>
        </h1>
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
      <Paragraphs
        paragraphs={currentPage.paragraph}
        removeThisParagraph={(id) =>
          removeParagraph(
            id,
            currentPage.mainMenuId,
            currentPage.secondMenuId,
            currentPage.thirdMenuId
          )
        }
      />
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() =>
            addParagraph(
              currentPage.mainMenuId,
              currentPage.secondMenuId,
              currentPage.thirdMenuId
            )
          }
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  ) : (
    <div>Select a Menu</div>
  );
};

export default PageContent;
