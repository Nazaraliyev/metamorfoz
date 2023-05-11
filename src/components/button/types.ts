export interface ButtonType {
  title: string;
  classname?: string;
  type?: "primary";
  icon?: string;
  onClick: () => void;
}
