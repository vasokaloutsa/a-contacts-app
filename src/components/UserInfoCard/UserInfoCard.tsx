import React, { useState } from "react";
import { IconSupervisor } from "../../assets/icons/IconSupervisor.tsx";
import styles from "./UserInfoCard.module.css";
import UserInfoModal from "../UserInfoModal/UserInfoModal.tsx";

const UserInfoCard = ({ name, companyName, email }) => {
  //   const displayedData = [{ Company: companyName }, { Email: email }];

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.wrapper} onClick={handleOpen}>
      <p className={styles.title}>{name}</p>
      <p className={styles.info}>
        <span>Company: </span>
        <span>{companyName}</span>
      </p>
      <p className={styles.info}>
        <span>Email: </span>
        <span>{email}</span>
      </p>
      <div className={styles.icon}>
        <IconSupervisor width="45px" height="45px" />
      </div>
      <UserInfoModal open={openModal} onClose={handleClose} />
    </div>
  );
};

export default UserInfoCard;
