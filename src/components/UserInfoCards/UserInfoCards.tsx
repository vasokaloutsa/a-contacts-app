import React, { useEffect, useState } from "react";
import UserInfoCard from "../UserInfoCard/UserInfoCard.tsx";
import { getUsers } from "../../services/getUsers.ts";
import UserInfoModal from "../UserInfoModal/UserInfoModal.tsx";
import styles from "./UserInfoCards.module.css";

type CompanyData = {
  name: string;
};

interface UserCardData {
  email: string;
  name: string;
  company: CompanyData;
}

const UserInfoCards = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(false);
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
        users.map((user: UserCardData) => (
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
