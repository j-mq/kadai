import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MainMenus from "./Menus/MainMenus";
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
  const paragraphDefault = `<h2>Header 2</h2><p>paragraph</p><a href="#">link</a>`;

  const addMainMenu = () => {
    let id = mainMenus.length > 0 ? mainMenus[mainMenus.length - 1].id + 1 : 0;

    let currentMenus = [...mainMenus];
    let newMenu: IMainMenu = {
      secondMenus: [],
      id: id,
      content: {
        title: "Main Menu Title",
        paragraph: [
          {
            id: 0,
            text: paragraphDefault,
          },
        ],
        mainMenuId: id,
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
    const targetMenu = mainMenus.filter((maMe) => maMe.id === mainId);

    let id =
      targetMenu[0].secondMenus.length > 0
        ? targetMenu[0].secondMenus[targetMenu[0].secondMenus.length - 1].id + 1
        : 0;

    let currentMenus = [...mainMenus];
    let newSecondaryMenu: ISecondMenus = {
      thirdMenus: [],
      id: id,
      content: {
        title: "Second Menu Title",
        paragraph: [{ id: 0, text: paragraphDefault }],
        mainMenuId: mainId,
        secondMenuId: id,
      },
    };

    mainMenus.map((maMe, index) => {
      if (maMe.id === mainId) {
        currentMenus[index].secondMenus.push(newSecondaryMenu);
      }
    });
    updateMenus(currentMenus);
  };

  const removeSecondaryMenu = (mainId: number, secondId: number) => {
    const targetMenu = mainMenus.filter((maMe) => maMe.id === mainId);
    if (targetMenu[0].secondMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus.map((maMe, maIndex) => {
        if (maMe.id == mainId) {
          maMe.secondMenus.map((seMe, seIndex) => {
            if (seMe.id === secondId) {
              currentMenus[maIndex].secondMenus.splice(seIndex, 1);
            }
          });
        }
      });
      updateMenus(currentMenus);
    }
  };

  const addThirdMenu = (mainId: number, secondId: number) => {
    const targetMenu = mainMenus.filter((maMe) => maMe.id === mainId);
    const targetSecondMenu = targetMenu[0].secondMenus.filter(
      (seMe) => seMe.id === secondId
    );

    let id =
      targetSecondMenu[0].thirdMenus.length > 0
        ? targetSecondMenu[0].thirdMenus[
            targetSecondMenu[0].thirdMenus.length - 1
          ].id + 1
        : 0;

    let currentMenus = [...mainMenus];
    let newThirdMenu: IThirdMenus = {
      id: id,
      content: {
        title: "Third Menu Title",
        paragraph: [{ id: 0, text: paragraphDefault }],
        mainMenuId: mainId,
        secondMenuId: secondId,
        thirdMenuId: id,
      },
    };

    mainMenus.map((maMe, maIndex) => {
      if (maMe.id === mainId) {
        maMe.secondMenus.map((seMe, seIndex) => {
          if (seMe.id === secondId) {
            currentMenus[maIndex].secondMenus[seIndex].thirdMenus.push(
              newThirdMenu
            );
          }
        });
      }
    });
    updateMenus(currentMenus);
  };

  const removeThirdMenu = (
    mainId: number,
    secondId: number,
    thirdId: number
  ) => {
    const targetMenu = mainMenus.filter((maMe) => maMe.id === mainId);
    const targetSecondMenu = targetMenu[0].secondMenus.filter(
      (seMe) => seMe.id === secondId
    );
    if (targetSecondMenu[0].thirdMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus.map((maMe, maIndex) => {
        if (maMe.id == mainId) {
          maMe.secondMenus.map((seMe, seIndex) => {
            if (seMe.id === secondId) {
              seMe.thirdMenus.map((thMe, thIndex) => {
                if (thMe.id === thirdId) {
                  currentMenus[maIndex].secondMenus[seIndex].thirdMenus.splice(
                    thIndex,
                    1
                  );
                }
              });
            }
          });
        }
      });
      updateMenus(currentMenus);
    }
  };

  return (
    <div className="sidebar-sticky pt-3 pb-3 text-white">
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
  );
};

export default SideBar;
