import React from "react";
import styles from "./UserInfoModal.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const UserInfoModal = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose} className={styles.wrapper}>
      <DialogTitle>{user?.name}</DialogTitle>
      <DialogContent>
        <div className={styles.content}>
          {user?.username && (
            <div className={styles.column}>
              <p className={styles.title}>Username:</p>
              <p>{user?.username}</p>
            </div>
          )}
          {user?.address && (
            <div className={styles.column}>
              <p className={styles.title}>Address:</p>
              <p>{user.address?.street}</p>
              <p>{user.address?.city}</p>
              <p>{user.address?.suite}</p>
            </div>
          )}
          {user?.phone && (
            <div className={styles.column}>
              <p className={styles.title}>Phone:</p>
              <p>{user.phone}</p>
            </div>
          )}
          {user?.email && (
            <div className={styles.column}>
              <p className={styles.title}>Email:</p>
              <p>{user.email}</p>
              <p className={styles.title}>Website:</p>
              <p>{user?.website ? user.website : " "}</p>
            </div>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        {/* Actions in the modal */}
        <Button onClick={onClose} className={styles.btn}>
          x
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserInfoModal;
