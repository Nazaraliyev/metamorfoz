import { useState } from "react";
import styles from "./app.module.css";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Bubble, Button, Modal } from "../components";
import { BubbleType } from "../components/bubble/types";

const App = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<BubbleType[]>(mock);


  // Functions
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal visible={modal} closeModal={toggleModal} />
      <Spin
        spinning={loading}
        tip="Loading..."
        indicator={<LoadingOutlined />}
        size="large"
      >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.bubbles}>
                {data.map((item, index) => (
                  <Bubble key={index} {...item}  index={index}/>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.button}>
                <Button
                  title="Hesabını təsdiqlə"
                  type="primary"
                  onClick={toggleModal}
                />
              </div>
        </div>
      </Spin>
    </>
  );
};

export default App;

const mock: BubbleType[] = [
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: false, isSleep: false, name: "Salam necesen", comment: "Comment" },
  {
    isMan: false,
    isSleep: true,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: false, isSleep: false, name: "Salam necesen", comment: "Comment" },
  {
    isMan: false,
    isSleep: true,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: false, isSleep: false, name: "Salam necesen", comment: "Comment" },
  {
    isMan: false,
    isSleep: true,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
];
