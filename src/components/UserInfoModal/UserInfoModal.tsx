import React from "react";
import styles from "./UserInfoModal.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import UserData from "../../types/types";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  user: UserData;
}

const UserInfoModal = ({ open, onClose, user }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className={styles.wrapper}>
      <DialogTitle
        sx={{
          backgroundColor: "hsl(0, 0%, 98%)",
        }}
      >
        {user?.name}
      </DialogTitle>
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
              <p>{user.website ? user.website : " "}</p>
            </div>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "0",
            color: "hsl(229, 6%, 66%)",
            fontWeight: 600,
          }}
        >
          x
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserInfoModal;
