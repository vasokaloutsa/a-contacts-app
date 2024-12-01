import React, { useEffect, useState } from "react";
import UserInfoCard from "../UserInfoCard/UserInfoCard.tsx";
import { getUsers } from "../../services/getUsers.ts";
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

  useEffect(() => {
    getUsers().then((data) => {
      if (data?.length) setUsers(data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {users?.length ? (
        users.map((user: UserCardData) => (
          <UserInfoCard
            key={user.email}
            name={user.name}
            companyName={user.company?.name}
            email={user.email}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserInfoCards;
