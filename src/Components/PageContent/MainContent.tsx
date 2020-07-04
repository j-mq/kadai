import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
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

  const [editMode, setEditMode] = useState<boolean>(false);

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
        key={`paragraph-${pa.id}`}
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

  const setTitleAndSave = () => {
    if (!currentPage) {
      return;
    }
    setEditMode(false);
    saveTitle(
      title,
      currentPage.mainMenuId,
      currentPage.secondMenuId,
      currentPage.thirdMenuId
    );
  };

  return currentPage ? (
    <div>
      <div>
        {editMode ? (
          <h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        <div className="text-right">
          {editMode ? (
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1"
              onClick={() => setTitleAndSave()}
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
