import { TextField } from "@mui/material";
import "./InputText.css";

import { InputTextProps } from "./InputText.types";

const InputText = (props: InputTextProps): React.JSX.Element => (
  <TextField
    id={props.id}
    defaultValue={props.defaultValue}
    inputProps={{ readOnly: !props.isEdited }}
    fullWidth
    className="input-text"
    size="small"
    label={props.label}
    onChange={props.onChange}
    required={props.required}
  />
);

export default InputText;
