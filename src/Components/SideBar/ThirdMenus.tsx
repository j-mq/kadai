import React, { Fragment } from "react";
import { IThirdMenus, IMenuContent } from "../../dataModels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  thirdMenus: IThirdMenus[];
  removeThisMenu: (thirdId: number) => void;
  showMenuContent: (content: IMenuContent) => void;
}

const ThirdMenus: React.FC<Props> = ({
  thirdMenus,
  removeThisMenu,
  showMenuContent,
}) => {
  const makeThirdMenus = () =>
    thirdMenus.length > 0 &&
    thirdMenus.map((thMe) => (
      <h6
        className="d-flex justify-content-between align-items-center px-3 mb-0"
        key={`thirdMenu-${thMe.id}`}
      >
        <a
          className="nav-link text-white m-0 p-0"
          href="#"
          onClick={() => showMenuContent(thMe.content)}
        >
          3rd Menu
        </a>
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
