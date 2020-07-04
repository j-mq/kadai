import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IMenuContent } from "../../dataModels";
import "./MainContent.styles.css";
import Paragraph from "./Paragraph";

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
  saveTitle: (
    newTitle: string,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => void;
  saveParagraph: (
    newParagraph: string,
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
  saveTitle,
  saveParagraph,
}) => {
  const [title, setTitle] = useState<string>(
    currentPage ? currentPage.title : ""
  );

  useEffect(() => {
    if (currentPage) {
      setTitle(currentPage.title);
    }
  }, [currentPage]);

  const contentNotSaved = () => {
    if (currentPage) {
      if (title !== currentPage.title) {
        return false;
      }
    }
    return true;
  };

  const makeParagraphs = () => {
    if (!currentPage) {
      return;
    }
    return currentPage.paragraph.map((pa) => (
      <Paragraph
        paragraph={pa}
        removeThisParagraph={(paragraphId) =>
          removeParagraph(
            paragraphId,
            currentPage.mainMenuId,
            currentPage.secondMenuId,
            currentPage.thirdMenuId
          )
        }
        saveThisParagraph={(newParagraph, paragraphId) =>
          saveParagraph(
            newParagraph,
            paragraphId,
            currentPage.mainMenuId,
            currentPage.secondMenuId,
            currentPage.thirdMenuId
          )
        }
      ></Paragraph>
    ));
  };

  return currentPage ? (
    <div>
      <div>
        <h1>
          <input
            className="no-border"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </h1>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            disabled={contentNotSaved()}
            onClick={() =>
              saveTitle(
                title,
                currentPage.mainMenuId,
                currentPage.secondMenuId,
                currentPage.thirdMenuId
              )
            }
          >
            <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {makeParagraphs()}
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
