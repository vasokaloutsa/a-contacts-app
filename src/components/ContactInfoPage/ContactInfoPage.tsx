import React from "react";
import { Footer } from "../Footer/Footer.tsx";
import { Header } from "../Header/Header.tsx";
import UserInfoCards from "../UserInfoCards/UserInfoCards.tsx";
import styles from "./ContactInfoPage.module.css";

const ContactInfoPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <UserInfoCards />
      <Footer />
    </div>
  );
};

export default ContactInfoPage;
