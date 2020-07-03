import React, { useState } from "react";
import "./SideBar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MainMenus from "./Menus/MainMenus";
import { IMainMenu } from "../../dataModels";

export interface Props {}

const SideBar: React.FC<Props> = ({}) => {
  const [mainMenus, setMainMenus] = useState<IMainMenu[] | null>(null);

  // const addMainMenu = () => {
  //   setMainMenus(mainMenus - 1);
  // };

  // const removeMainMenu = () => {
  //   setMainMenus(mainMenus + 1);
  // };

  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar text-white">
      <div className="sidebar-sticky">
        <MainMenus mainMenus={mainMenus} />
        <div className="text-center">
          <button className="btn btn-sm btn-link text-white p-0">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
