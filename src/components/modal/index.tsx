import { useEffect, useState } from "react";
import styles from "./modal.module.css";

import { Modal as AntModal, Row, Col } from "antd";
import { ModalType } from "./types";
import { calendar, instagram, modalAvatarMan } from "../../assets";
import { Button } from "..";
import { calendarLink, instagramLink } from "../../utils/constant";

const Modal = (props: ModalType) => {
  const [submited, setSubmited] = useState(false);
  const [value, setvalue] = useState("");


  useEffect(() => {
    if(props.data?.is_submit){
      setSubmited(true);
    }
  },[props])

  const share = (isInstagram: boolean) => () => {
    const a = document.createElement("a");
    if (isInstagram) {
      a.download="download";
      a.href=instagramLink;
    } else {
      a.href=calendarLink;
      a.target="_blank";
      console.log("calendar");
    }

    a.click();
  };

  const submit = () => {
    if(props.data.id){
      console.log('nazar val : ', value);
    }
    setSubmited(true);
  };




  return (
    <AntModal
      className={styles.wrapper}
      open={props.visible}
      title="Hesabini təstiqlə"
      footer={null}
      centered
      onCancel={props.closeModal}
    >
      <Row>
        <Col xs={24}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              <img src={modalAvatarMan} />
            </div>
          </div>
        </Col>
        <Col xs={24}>
          {submited ? (
            <div className={styles.submited}>
              <h2>Hesabın təsdiqləndi</h2>
              <p>
                Səni tədbirdə görmək bizim üçün çox həyəcan <br /> vericidir.
                <span> 4 iyun saat 18:00'da görüşənədək.</span>
              </p>
              <div className={styles.buttons}>
                <Button
                  title="Calendara əlavə et"
                  icon={calendar}
                  onClick={share(false)}
                />
                <Button
                  title="Sosial mediada paylaş"
                  icon={instagram}
                  onClick={share(true)}
                />
              </div>
            </div>
          ) : (
            <div className={styles.comment}>
              <h2>Salam, {props.data?.full_name}</h2>
              <p>
                <span>Metamorfoz</span> tədbirinə qatılmaq üçün zəhmət <br />
                olmasa hesabını təsdiqlə
              </p>
              <textarea placeholder="Status qeyd edə bilərsən..." rows={1} onChange={e => setvalue(e.target.value)} value={value} />
              <Button
                title="Hesabını təsdiqlə"
                type="primary"
                onClick={submit}
              />
            </div>
          )}
        </Col>
      </Row>
    </AntModal>
  );
};

export default Modal;
