import { useEffect, useState } from "react";
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
  const [button, setButton] = useState({
    isSubmited:true,
    text:"Hesabını təsdiqlə",
    id:null
  })
  


  useEffect(() => {
    if(window.location.pathname && data.length !== 0){
      const id = parseInt(window.location.pathname.replace("/",""));
      if(id && id !== 0){
        setButton(prevButton => {
          const newButton = {...prevButton};
          if(data.find(user => user?.id === id)?.isSleep){
            newButton.text = "Sosial Şəbəkə paylaş";
            newButton.isSubmited = true;
          }
          newButton.id = id;
          return newButton;
        })
      }
    }
  },[window.location, data]);

  // Functions
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal visible={modal} closeModal={toggleModal}  isSubmit={button.isSubmited}/>
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
          {
            button.id && <div className={styles.button}>
            <Button
              title={button.text}
              type="primary"
              onClick={toggleModal}
            />
          </div>
          }
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
