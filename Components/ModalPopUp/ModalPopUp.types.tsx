export type ModalPopUpProps = {
  open: boolean;
  onClose: VoidFunction;
  titleText: string;
  actionText: string;
  onAction: VoidFunction;
  onCancel?: VoidFunction;
  children?: React.ReactNode;
};
