import React,{useCallback, useEffect, useState } from "react";
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
  const [style, setStyle] = useState({});

  const generateStyle = useCallback(() => {
    const random = Math.round(Math.random() * 100)%40;
    const scale = random/40;

    setStyle({
      top: `${random+1}%`,
      left: `${random}%`,
      transform: `scale(${scale < 0.5 ?  1-scale:scale})`,
    });
  },[]);

  useEffect(() => {
    if(Object.keys(style).length === 0){
      generateStyle();
    }
  },[style])


  return (
    <div
      className={cx(styles.wrapper, { [styles.top]: props.comment }, props.className)}
      style={{zIndex:1000-props.index}}
    >
      <div className={styles.content} style={style}>
          <img src={props.isMan ? modalAvatarMan : modalAvatarMan} />
          {props.comment && <Comment title={props.comment} />}
          <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Bubble;
