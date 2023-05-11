import { useState, useEffect, useCallback } from "react";
import cx from "classnames";
import styles from "./bubble.module.css";

import { BubbleType, CommentType } from "./types";
import { modalAvatarMan } from "../../assets";

const Comment = (props: CommentType) => {
  return (
    <div className={styles.comment}>
      <span>{props.title}</span>
    </div>
  );
};

const Bubble = (props: BubbleType) => {
  const generateStyle = () => {
    const random = Math.round(Math.random() * 10);
    return {
      top: `${random}%`,
      lef: `${random}%`,
      transform: `scale(${random > 5 ? random / 10 : 0.8})`,
    };
  };

  return (
    <div
      className={cx(styles.wrapper, { [styles.top]: props.comment })}
      style={generateStyle()}
    >
      <div className={styles.content}>
        {props.isSleep ? (
          <>
            <img src={props.isMan ? modalAvatarMan : modalAvatarMan} />
          </>
        ) : (
          <>
            <img src={props.isMan ? modalAvatarMan : modalAvatarMan} />
            {props.comment && <Comment title={props.comment} />}
          </>
        )}
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default Bubble;
