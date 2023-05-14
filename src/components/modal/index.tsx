import { useState } from "react";
import styles from "./modal.module.css";

import { Modal as AntModal, Row, Col } from "antd";
import { ModalType } from "./types";
import { calendar, instagram, modalAvatarMan } from "../../assets";
import { Button } from "..";
import { submitVisitor } from "../../apis";

const Modal = (props: ModalType) => {
  const [submited, setSubmited] = useState(props.isSubmit);

  const share = (isInstagram: boolean) => () => {
    if (isInstagram) {
      console.log("insta");
    } else {
      console.log("calendar");
    }
  };

  const submit = () => {
    console.log("submit");
    const id = window.location.pathname.replace("/","");
    console.log('id : ', id);
    // submitVisitor.then().catch();
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
              <h2>Hesabın təsdiqlə</h2>
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
              <h2>Salam, Aqsin Rəcəbov</h2>
              <p>
                <span>Metamorfoz</span> tədbirinə qatılmaq üçün zəhmət <br />
                olmasa hesabını təsdiqlə
              </p>
              <textarea placeholder="Status qeyd edə bilərsən..." rows={1} />
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
