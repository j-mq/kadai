import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SecondMenus from "./SecondMenus";
import ThirdMenus from "./ThirdMenus";
import { IMainMenu } from "../../../dataModels";

export interface Props {
  mainMenus: IMainMenu[];
  removeMainMenu: (mainId: number) => void;
  addSecondaryMenu: (maindId: number) => void;
  removeSecondaryMenu: (mainId: number, secondId: number) => void;
  addThirdMenu: (mainId: number, secondId: number) => void;
  removeThirdMenu: (mainId: number, secondId: number, thirdId: number) => void;
}

const MainMenus: React.FC<Props> = ({
  mainMenus,
  removeMainMenu,
  addSecondaryMenu,
  removeSecondaryMenu,
  addThirdMenu,
  removeThirdMenu,
}) => {
  const makeMainMenus = () =>
    mainMenus.length > 0 ? (
      mainMenus.map((maMe) => (
        <div className="mb-3">
          <h4 className="d-flex justify-content-between align-items-center px-3">
            <span>Main menu</span>
            <div className="btn-group text-right">
              <button
                className="btn btn-sm btn-link text-white mx-1 p-0"
                onClick={() => addSecondaryMenu(maMe.id)}
              >
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
              </button>
              <button
                className="btn btn-sm btn-link text-white p-0"
                onClick={() => removeMainMenu(maMe.id)}
              >
                <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
              </button>
            </div>
          </h4>
          <SecondMenus
            secondaryMenus={maMe.secondMenus}
            removeThisSecondMenu={(secondId) =>
              removeSecondaryMenu(maMe.id, secondId)
            }
            removeThisThirdMenu={(secondId, thirdId) =>
              removeThirdMenu(maMe.id, secondId, thirdId)
            }
            addMenuHere={(secondId) => addThirdMenu(maMe.id, secondId)}
          />
        </div>
      ))
    ) : (
      <div className="text-center">Add a menu</div>
    );

  return <Fragment>{makeMainMenus()}</Fragment>;
};

export default MainMenus;
