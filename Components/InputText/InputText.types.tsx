import { ChangeEventHandler } from "react";

export type InputTextProps = {
  id: string;
  defaultValue: string;
  isEdited: boolean;
  label: string;
  onChange: ChangeEventHandler;
  required: boolean;
};
