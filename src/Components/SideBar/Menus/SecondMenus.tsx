import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { IMainMenu, ISecondMenus } from "../../../dataModels";
import ThirdMenus from "./ThirdMenus";

export interface Props {
  secondaryMenus: ISecondMenus[];
  removeThisSecondMenu: (secondId: number) => void;
  removeThisThirdMenu: (secondId: number, thirdId: number) => void;
  addMenuHere: (secondId: number) => void;
}

const SecondMenus: React.FC<Props> = ({
  secondaryMenus,
  removeThisSecondMenu,
  removeThisThirdMenu,
  addMenuHere,
}) => {
  const makeSecondMenus = () =>
    secondaryMenus.length > 0 &&
    secondaryMenus.map((seMe) => (
      <div className="mb-2">
        <h5 className="d-flex justify-content-between align-items-center px-3 mb-1">
          <span>2nd Menu</span>
          <div className="btn-group text-right">
            <button
              className="btn btn-sm btn-link text-white mx-1 p-0"
              onClick={() => addMenuHere(seMe.id)}
            >
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </button>
            <button
              className="btn btn-sm btn-link text-white p-0"
              onClick={() => removeThisSecondMenu(seMe.id)}
            >
              <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
            </button>
          </div>
        </h5>
        <ThirdMenus
          thirdMenus={seMe.thirdMenus}
          removeThisMenu={(thirdId) => removeThisThirdMenu(seMe.id, thirdId)}
        />
      </div>
    ));

  return <Fragment>{makeSecondMenus()}</Fragment>;
};

export default SecondMenus;
