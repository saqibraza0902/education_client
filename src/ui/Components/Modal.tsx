import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../form/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 190,
  outline: "none",
  borderRadius: 3,
};
interface Props {
  open: boolean;
  text: string;
  handleClose: () => void;
  handleDel: () => void;
}
const ModalCom = ({ open, text, handleClose, handleDel }: Props) => {
  const handleClick = () => {
    handleClose();
    handleDel();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="dark:text-brand_black-500"
            variant="h6"
            component="h2"
          >
            {text}
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              onClick={handleClose}
              className="!bg-brand_blue-400 !text-white !capitalize !px-5 !h-12 !text-base  border-none outline-none"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleClick()}
              className="!bg-red-500 !text-white !capitalize !px-5 !h-12 !text-base border-none outline-none"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalCom;
