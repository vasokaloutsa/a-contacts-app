import React, { useEffect, useState } from "react";
import UserInfoCard from "../UserInfoCard/UserInfoCard.tsx";
import { getUsers } from "../../services/getUsers.ts";
import UserInfoModal from "../UserInfoModal/UserInfoModal.tsx";
import styles from "./UserInfoCards.module.css";
import UserData from "../../types/types.ts";

const UserInfoCards = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (user) => {
    setOpenModal(true);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedUser(false);
  };

  useEffect(() => {
    getUsers().then((data) => {
      if (data?.length) setUsers(data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {users?.length ? (
        users.map((user: UserData) => (
          <UserInfoCard key={user.email} user={user} handleOpen={handleOpen} />
        ))
      ) : (
        <></>
      )}
      <UserInfoModal
        open={openModal}
        onClose={handleClose}
        user={selectedUser}
      />
    </div>
  );
};

export default UserInfoCards;
