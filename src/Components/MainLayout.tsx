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
    editContentIteratior(
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
    editContentIteratior(
      contentEditTypes.removeParagraph,
      mainMenuId,
      secondMenuId,
      thirdMenuId,
      paragraphId
    );
  };

  const editContentIteratior = (
    action: contentEditTypes,
    mainMenuId: number,
    secondMenuId?: number,
    thirdMenuId?: number,
    paragraphId?: number
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
                    editContent(action, thMe, paragraphId);
                    return;
                  }
                });
              }
              editContent(action, seMe, paragraphId);
              return;
            }
          });
        } else {
          editContent(action, maMe, paragraphId);
          return;
        }
      }
    });
    setMainMenus(currentMenus);
  };

  const editContent = (
    action: contentEditTypes,
    menu: IMainMenu | ISecondMenus | IThirdMenus,
    paragraphId?: number
  ) => {
    let paragraph = "New paragraph";
    switch (action) {
      case contentEditTypes.addParagraph:
        let id =
          menu.content.paragraph.length > 0
            ? mainMenus[mainMenus.length - 1].id + 1
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
          <div className="col-md-10 p-5">
            <PageContent
              currentPage={currentPage}
              addParagraph={addParagraph}
              removeParagraph={removeParagraph}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
