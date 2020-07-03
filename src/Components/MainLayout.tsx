import React, { Fragment, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import PageContent from "./PageContent/MainContent";
import { IMainMenu, IMenuContent } from "../dataModels";

function MainLayout() {
  const [mainMenus, setMainMenus] = useState<IMainMenu[]>([]);
  const [currentPage, setCurrentPage] = useState<IMenuContent | null>(null);

  const updateMenus = (newMenus: IMainMenu[]) => {
    setMainMenus(newMenus);
  };

  const showMenuContent = (content: IMenuContent) => {
    setCurrentPage(content);
  };

  //const changePageContent

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar
              mainMenus={mainMenus}
              updateMenus={updateMenus}
              showMenuContent={showMenuContent}
            />
          </div>
          <div className="col-md-10 p-5">
            <PageContent currentPage={currentPage} />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
