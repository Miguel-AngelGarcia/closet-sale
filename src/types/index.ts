import { MouseEventHandler } from "react";

export enum ArticleType {
  Shirt = "Shirt",
  Pant = "Pant",
  Dress = "Dress",
  Jewelry = "Jewelry",
  Handbag = "Handbag",
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface PieceProps {
  articleId: number;
  articleName: string;
  articleImage?: string;
  articleAlt?: string;
  articleURL: string;
  articleDesc: string;
  articleType: ArticleType;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  //a function. takes string and returns nothing. only a setter
  setManufacturer?: (manufacturer: string) => void;
}
