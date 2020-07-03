import React, { useState } from "react";
import "./SideBar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MainMenus from "./Menus/MainMenus";
import { IMainMenu, IInnerMenus } from "../../dataModels";

export interface Props {}

const SideBar: React.FC<Props> = ({}) => {
  const [mainMenus, setMainMenus] = useState<IMainMenu[]>([]);

  const addMainMenu = () => {
    let currentMenus = [...mainMenus];
    let newMenu: IMainMenu = {
      secondMenus: [],
      thirdMenus: [],
      id: mainMenus.length,
    };
    currentMenus.push(newMenu);
    setMainMenus(currentMenus);
  };

  const removeMainMenu = (mainId: number) => {
    if (mainMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus.map((cm, index) => {
        if (cm.id === mainId) {
          currentMenus.splice(index, 1);
        }
      });
      setMainMenus(currentMenus);
    }
  };

  const addSecondaryMenu = (mainId: number) => {
    let currentMenus = [...mainMenus];
    let newSecondaryMenu: IInnerMenus = {
      id: mainMenus[mainId].secondMenus.length,
    };
    currentMenus[mainId].secondMenus.push(newSecondaryMenu);
    setMainMenus(currentMenus);
  };

  const removeSecondaryMenu = (mainId: number, secondId: number) => {
    if (mainMenus[mainId].secondMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus[mainId].secondMenus.map((sm, index) => {
        if (sm.id === secondId) {
          currentMenus[mainId].secondMenus.splice(index, 1);
        }
      });
      setMainMenus(currentMenus);
    }
  };

  const addThirdMenu = (mainId: number) => {
    let currentMenus = [...mainMenus];
    let newThirdMenu: IInnerMenus = {
      id: mainMenus[mainId].thirdMenus.length,
    };
    currentMenus[mainId].thirdMenus.push(newThirdMenu);
    setMainMenus(currentMenus);
  };

  const removeThirdMenu = (mainId: number, thirdId: number) => {
    if (mainMenus[mainId].thirdMenus.length > 0) {
      let currentMenus = [...mainMenus];
      mainMenus[mainId].thirdMenus.map((tm, index) => {
        if (tm.id === thirdId) {
          currentMenus[mainId].thirdMenus.splice(index, 1);
        }
      });
      setMainMenus(currentMenus);
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
