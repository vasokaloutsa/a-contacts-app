import React from "react";
import { IconSupervisor } from "../../assets/icons/IconSupervisor.tsx";
import styles from "./UserInfoCard.module.css";

const UserInfoCard = ({ user, handleOpen }) => {
  //   const displayedData = [{ Company: companyName }, { Email: email }];

  return (
    <div className={styles.wrapper} onClick={() => handleOpen(user)}>
      <p className={styles.title}>{user.name}</p>
      <p className={styles.info}>
        <span>Company: </span>
        <span>{user.company.name}</span>
      </p>
      <p className={styles.info}>
        <span>Email: </span>
        <span>{user.email}</span>
      </p>
      <div className={styles.icon}>
        <IconSupervisor width="64px" height="64px" />
      </div>
    </div>
  );
};

export default UserInfoCard;
