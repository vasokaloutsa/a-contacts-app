// import styles from "./App.module.css";
// import ContactInfoPage from "./components/ContactInfoPage/ContactInfoPage.tsx";
import React from "react";
import { Footer } from "./components/Footer/Footer.tsx";
import { Header } from "./components/Header/Header.tsx";
import UserInfoCards from "./components/UserInfoCards/UserInfoCards.tsx";
import styles from "./App.css";

function App() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Header />
        <UserInfoCards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
