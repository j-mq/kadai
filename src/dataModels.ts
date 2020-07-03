export interface IMainMenu {
  secondMenus: ISecondMenus[];
  id: number;
}

export interface ISecondMenus {
  thirdMenus: IThirdMenus[];
  id: number;
}

export interface IThirdMenus {
  id: number;
}
