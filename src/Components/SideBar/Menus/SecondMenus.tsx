import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { IMainMenu, IInnerMenus } from "../../../dataModels";

export interface Props {
  secondaryMenus: IInnerMenus[];
  removeThisMenu: (secondId: number) => void;
  addMenuHere: () => void;
}

const SecondMenus: React.FC<Props> = ({
  secondaryMenus,
  removeThisMenu,
  addMenuHere,
}) => {
  const makeSecondMenus = () =>
    secondaryMenus.length > 0 &&
    secondaryMenus.map((seMe) => (
      <h5 className="d-flex justify-content-between align-items-center px-3 mb-1">
        <span>2nd Menu</span>
        <div className="btn-group text-right">
          <button
            className="btn btn-sm btn-link text-white mx-1 p-0"
            onClick={() => addMenuHere()}
          >
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </button>
          <button
            className="btn btn-sm btn-link text-white p-0"
            onClick={() => removeThisMenu(seMe.id)}
          >
            <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
          </button>
        </div>
      </h5>
    ));

  return <Fragment>{makeSecondMenus()}</Fragment>;
};

export default SecondMenus;
