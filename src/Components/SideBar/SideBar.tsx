import React, { useState } from "react";
import "./SideBar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MainMenus from "./MainMenus";
import {
  IMainMenu,
  ISecondMenus,
  IThirdMenus,
  IMenuContent,
} from "../../dataModels";

export interface Props {
  mainMenus: IMainMenu[];
  updateMenus: (newMenus: IMainMenu[]) => void;
  showMenuContent: (content: IMenuContent) => void;
}

const SideBar: React.FC<Props> = ({
  mainMenus,
  updateMenus,
  showMenuContent,
}) => {
  console.log("The main menus", mainMenus);

  const addMainMenu = () => {
    let id = mainMenus.length > 0 ? mainMenus[mainMenus.length - 1].id + 1 : 0;

    let currentMenus = [...mainMenus];
    let newMenu: IMainMenu = {
      secondMenus: [],
      id: id,
      content: {
        title: "Main Menu Title",
        paragraph: [{ content: "Main Menu Paragraph" }],
      },
    };
    currentMenus.push(newMenu);
    updateMenus(currentMenus);
  };

  const removeMainMenu = (mainId: number) => {
    if (mainMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus.map((cm, index) => {
        if (cm.id === mainId) {
          currentMenus.splice(index, 1);
        }
      });
      updateMenus(currentMenus);
    }
  };

  const addSecondaryMenu = (mainId: number) => {
    let id =
      mainMenus[mainId].secondMenus.length > 0
        ? mainMenus[mainId].secondMenus[
            mainMenus[mainId].secondMenus.length - 1
          ].id + 1
        : 0;

    let currentMenus = [...mainMenus];
    let newSecondaryMenu: ISecondMenus = {
      thirdMenus: [],
      id: id,
      content: {
        title: "Second Menu Title",
        paragraph: [{ content: "Second Menu Paragraph" }],
      },
    };
    currentMenus[mainId].secondMenus.push(newSecondaryMenu);
    updateMenus(currentMenus);
  };

  const removeSecondaryMenu = (mainId: number, secondId: number) => {
    if (mainMenus[mainId].secondMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus[mainId].secondMenus.map((sm, index) => {
        if (sm.id === secondId) {
          currentMenus[mainId].secondMenus.splice(index, 1);
        }
      });
      updateMenus(currentMenus);
    }
  };

  const addThirdMenu = (mainId: number, secondId: number) => {
    let id =
      mainMenus[mainId].secondMenus[secondId].thirdMenus.length > 0
        ? mainMenus[mainId].secondMenus[secondId].thirdMenus[
            mainMenus[mainId].secondMenus[secondId].thirdMenus.length - 1
          ].id + 1
        : 0;

    let currentMenus = [...mainMenus];
    let newThirdMenu: IThirdMenus = {
      id: id,
      content: {
        title: "Third Menu Title",
        paragraph: [{ content: "Second Menu Paragraph" }],
      },
    };
    currentMenus[mainId].secondMenus[secondId].thirdMenus.push(newThirdMenu);
    updateMenus(currentMenus);
  };

  const removeThirdMenu = (
    mainId: number,
    secondId: number,
    thirdId: number
  ) => {
    if (mainMenus[mainId].secondMenus[secondId].thirdMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus[mainId].secondMenus[secondId].thirdMenus.map((tm, index) => {
        if (tm.id === thirdId) {
          currentMenus[mainId].secondMenus[secondId].thirdMenus.splice(
            index,
            1
          );
        }
      });
      updateMenus(currentMenus);
    }
  };

  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar text-white">
      <div className="sidebar-sticky">
        <MainMenus
          mainMenus={mainMenus}
          removeMainMenu={removeMainMenu}
          addSecondaryMenu={addSecondaryMenu}
          removeSecondaryMenu={removeSecondaryMenu}
          addThirdMenu={addThirdMenu}
          removeThirdMenu={removeThirdMenu}
          showMenuContent={showMenuContent}
        />
        <div className="text-center">
          <button
            className="btn btn-sm btn-link text-white p-0"
            onClick={addMainMenu}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
