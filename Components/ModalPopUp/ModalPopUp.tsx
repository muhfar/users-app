import { Box, Button, Modal, Typography } from "@mui/material";

import "./ModalPopUp.css";
import { ModalPopUpProps } from "./ModalPopUp.types";

const ModalPopUp = (props: ModalPopUpProps): React.JSX.Element => {
  const _renderActionButton = (onAction: VoidFunction): React.JSX.Element => (
    <Button variant="contained" size="medium" onClick={onAction}>
      {props.actionText || "confirm"}
    </Button>
  );
  const _renderCancelButton = (onCancel: VoidFunction): React.JSX.Element => (
    <Button variant="contained" color="secondary" size="medium" onClick={onCancel}>
      Cancel
    </Button>
  );

  return (
    <Modal open={props.open} onClose={props.onClose} className="modal-container">
      <Box className="modal-content">
        <Typography variant="h5">{props.titleText}</Typography>
        <hr />
        {props.children}
        <Box className="modal-buttons">
          {_renderActionButton(props.onAction)}
          {_renderCancelButton(props.onCancel || props.onClose)}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPopUp;
