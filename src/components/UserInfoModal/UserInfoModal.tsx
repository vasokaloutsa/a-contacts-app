import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const UserInfoModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>My Modal Title</DialogTitle>
      <DialogContent>
        {/* Content of the modal */}
        <p>This is the content of the modal.</p>
      </DialogContent>
      <DialogActions>
        {/* Actions in the modal */}
        <Button onClick={onClose}>x</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserInfoModal;
