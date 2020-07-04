import React, { Fragment, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import PageContent from "./PageContent/MainContent";
import {
  IMainMenu,
  IMenuContent,
  IThirdMenus,
  ISecondMenus,
  contentEditTypes,
} from "../dataModels";

function MainLayout() {
  const [mainMenus, setMainMenus] = useState<IMainMenu[]>([]);
  const [currentPage, setCurrentPage] = useState<IMenuContent | null>(null);

  console.log("Main menus", mainMenus);

  const updateMenus = (newMenus: IMainMenu[]) => {
    setMainMenus(newMenus);
  };

  const showMenuContent = (content: IMenuContent) => {
    setCurrentPage(content);
  };

  const addParagraph = (
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => {
    editContentIterator(
      contentEditTypes.addParagraph,
      mainMenuId,
      secondMenuId,
      thirdMenuId
    );
  };

  const removeParagraph = (
    paragraphId: number,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => {
    editContentIterator(
      contentEditTypes.removeParagraph,
      mainMenuId,
      secondMenuId,
      thirdMenuId,
      paragraphId
    );
  };

  const saveTitle = (
    newTitle: string,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => {
    editContentIterator(
      contentEditTypes.saveTitle,
      mainMenuId,
      secondMenuId,
      thirdMenuId,
      undefined,
      newTitle
    );
  };

  const saveParagraph = (
    newParagraph: string,
    paragraphId: number,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number
  ) => {
    editContentIterator(
      contentEditTypes.saveParagraph,
      mainMenuId,
      secondMenuId,
      thirdMenuId,
      paragraphId,
      newParagraph
    );
  };

  const editContentIterator = (
    action: contentEditTypes,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number,
    paragraphId?: number,
    newText?: string
  ) => {
    let currentMenus = [...mainMenus];
    currentMenus.map((maMe) => {
      if (maMe.id === mainMenuId) {
        if (typeof secondMenuId !== "undefined") {
          maMe.secondMenus.map((seMe) => {
            if (seMe.id === secondMenuId) {
              if (typeof thirdMenuId !== "undefined") {
                seMe.thirdMenus.map((thMe) => {
                  if (thMe.id === thirdMenuId) {
                    editContent(action, thMe, paragraphId, newText);
                    return;
                  }
                });
              } else {
                editContent(action, seMe, paragraphId, newText);
                return;
              }
            }
          });
        } else {
          editContent(action, maMe, paragraphId, newText);
          return;
        }
      }
    });
    setMainMenus(currentMenus);
  };

  const editContent = (
    action: contentEditTypes,
    menu: IMainMenu | ISecondMenus | IThirdMenus,
    paragraphId?: number,
    newText?: string
  ) => {
    let paragraph = "New paragraph";
    switch (action) {
      case contentEditTypes.addParagraph:
        let id =
          menu.content.paragraph.length > 0
            ? menu.content.paragraph[menu.content.paragraph.length - 1].id + 1
            : 0;
        menu.content.paragraph.push({ id: id, text: paragraph });
        break;
      case contentEditTypes.removeParagraph:
        if (typeof paragraphId !== "undefined") {
          menu.content.paragraph.map((pa, index) => {
            if (pa.id === paragraphId) {
              menu.content.paragraph.splice(index, 1);
            }
          });
        }
        break;
      case contentEditTypes.saveTitle:
        if (typeof newText !== "undefined") {
          menu.content.title = newText;
        }
        break;
      case contentEditTypes.saveParagraph:
        if (
          typeof newText !== "undefined" &&
          typeof paragraphId !== "undefined"
        ) {
          menu.content.paragraph.map((pa, index) => {
            if (pa.id === paragraphId) {
              pa.text = newText;
            }
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar
              mainMenus={mainMenus}
              updateMenus={updateMenus}
              showMenuContent={showMenuContent}
            />
          </div>
          <div className="col-md-10 p-5 mb-4">
            <PageContent
              currentPage={currentPage}
              addParagraph={addParagraph}
              removeParagraph={removeParagraph}
              saveTitle={saveTitle}
              saveParagraph={saveParagraph}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
