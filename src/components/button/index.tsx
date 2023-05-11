import styles from "./button.module.css";
import cx from "classnames";

import { Button as AntButton } from "antd";
import { ButtonType } from "./types";

const Button = (props: ButtonType) => {
  return (
    <AntButton
      className={cx(styles.model, {
        [styles.primary]: props.type === "primary",
      })}
      onClick={props.onClick}
    >
      <div className={styles.content}>
        {props.icon && <img src={props.icon} />}
        <span>{props.title}</span>
      </div>
    </AntButton>
  );
};

export default Button;
