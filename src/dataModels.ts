export interface IMainMenu {
  secondMenus: ISecondMenus[];
  id: number;
  content: IMenuContent;
}

export interface ISecondMenus {
  thirdMenus: IThirdMenus[];
  id: number;
  content: IMenuContent;
}

export interface IThirdMenus {
  id: number;
  content: IMenuContent;
}

export interface IMenuContent {
  title: string;
  paragraph: IParagraph[];
  mainMenuId: number;
  secondMenuId?: number;
  thirdMenuId?: number;
}

export interface IParagraph {
  id: number;
  text: string;
}

export enum contentEditTypes {
  addParagraph,
  removeParagraph,
  saveTitle,
}

export enum menuTypes {
  mainMenu,
  secondMenu,
  thirdMenu,
}
