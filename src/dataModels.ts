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
}

export interface IParagraph {
  content: string;
}

export enum menuTypes {
  mainMenu,
  secondMenu,
  thirdMenu,
}
