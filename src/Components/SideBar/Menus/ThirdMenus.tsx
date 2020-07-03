import React, { Fragment } from "react";
import { IThirdMenus } from "../../../dataModels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  thirdMenus: IThirdMenus[];
  removeThisMenu: (thirdId: number) => void;
}

const ThirdMenus: React.FC<Props> = ({ thirdMenus, removeThisMenu }) => {
  const makeThirdMenus = () =>
    thirdMenus.length > 0 &&
    thirdMenus.map((thMe) => (
      <h6 className="d-flex justify-content-between align-items-center px-3 mb-0">
        <span>3rd Menu</span>
        <div className="text-right">
          <button
            className="btn btn-sm btn-link text-white p-0"
            onClick={() => removeThisMenu(thMe.id)}
          >
            <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
          </button>
        </div>
      </h6>
    ));

  return <Fragment>{makeThirdMenus()}</Fragment>;
};

export default ThirdMenus;
