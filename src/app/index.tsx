import { useEffect, useState } from "react";
import styles from "./app.module.css";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Bubble, Button, Modal } from "../components";
import { BubbleType } from "../components/bubble/types";

const App = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    visible:false,
    data:{}
  });
  const [data, setData] = useState<BubbleType[]>(mock);
  const [count, setCount] = useState({
    top:0,
    bottom:0
  });
  const [button, setButton] = useState({
    text:"Hesabını təsdiqlə",
  })

  useEffect(() => {
    if(count.top=== 0){
      const width = window.innerWidth-200;
      const normalCount = Math.floor((width-140)/120);
      const topCount = ((width-200)/60)-4;
      const bottomRemainder = ((data.length-topCount)%normalCount)
      setCount({top:topCount, bottom:normalCount*2+bottomRemainder});
    }
  },[])

  useEffect(() => {
    if(data.length !== 0 && Object.keys(modal.data).length === 0){
      const id = parseInt(window.location.pathname.replace("/",""));
      const foundUser = data.find(user => user.id === id);
      if(foundUser){
        setModal(prevModal => ({...prevModal, data:foundUser}));
      }
    }
  },[data, modal])

  // Functions
  const toggleModal = () => {
    setModal(prevModal => ({...prevModal, visible:!prevModal.visible}));
  };


  return (
    <>
      <Modal visible={modal.visible} closeModal={toggleModal} data={modal.data} />
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
                {
                  data.slice(0,count.top).map((item, index) =><Bubble key={index} {...item}  index={index}/> )
                }
              </div>
              <div className={styles.bubbles}>
                {data.slice(count.top+1, data.length-count.bottom).map((item, index) => (
                  <Bubble key={index} {...item}  index={index}/>
                ))}
              </div>
              <div className={styles.bubbles}>
                {
                  data.slice(data.length-count.bottom).map((item, index) =><Bubble key={index} {...item}  index={index}/> )
                }
              </div>
            </div>
          </div>
           <div className={styles.button}>
            <Button
              title={button.text}
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
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  { isMan: true, isSleep: true, name: "Salam Salam", comment: null },
  {
    isMan: false,
    isSleep: false,
    name: "Salam yaxsiyam",
    comment: "COmment dana",
  },
  
];
