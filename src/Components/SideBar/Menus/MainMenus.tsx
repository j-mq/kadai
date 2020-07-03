import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import SecondMenus from "./SecondMenus";
import ThirdMenus from "./ThirdMenus";
import { IMainMenu } from "../../../dataModels";

export interface Props {
  mainMenus: IMainMenu[] | null;
}

const MainMenus: React.FC<Props> = ({ mainMenus }) => {
  //const ref = useRef(initialValue);

  const makeMainMenus = () =>
    mainMenus ? (
      mainMenus.map((maMe) => (
        <div>
          <h4 className="d-flex justify-content-between align-items-center px-3 mb-2">
            <span>Main menu</span>
            <div className="btn-group text-right">
              <button className="btn btn-sm btn-link text-white mx-1 p-0">
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
              </button>
              <button className="btn btn-sm btn-link text-white p-0">
                <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
              </button>
            </div>
          </h4>
          <SecondMenus />
          <ThirdMenus />
        </div>
      ))
    ) : (
      <div className="text-center">Add a menu</div>
    );

  return <Fragment>{makeMainMenus()}</Fragment>;
};

export default MainMenus;
