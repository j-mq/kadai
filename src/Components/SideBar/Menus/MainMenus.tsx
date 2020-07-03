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
  addThirdMenu: (mainId: number) => void;
  removeThirdMenu: (mainId: number, thirdId: number) => void;
}

const MainMenus: React.FC<Props> = ({
  mainMenus,
  removeMainMenu,
  addSecondaryMenu,
  removeSecondaryMenu,
  addThirdMenu,
  removeThirdMenu,
}) => {
  //const ref = useRef(initialValue);
  // console.log("THE MENUS?", mainMenus);

  // useEffect(() => {}, [mainMenus]);

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
            removeThisMenu={(id) => removeSecondaryMenu(maMe.id, id)}
            addMenuHere={() => console.log("NO NO NO must go deeper!")}
          />
          <ThirdMenus
            thirdMenus={maMe.thirdMenus}
            removeThisMenu={(id) => removeThirdMenu(maMe.id, id)}
          />
        </div>
      ))
    ) : (
      <div className="text-center">Add a menu</div>
    );

  return <Fragment>{makeMainMenus()}</Fragment>;
};

export default MainMenus;
