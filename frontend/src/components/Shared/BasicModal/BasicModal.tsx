import { Modal } from 'semantic-ui-react';

export type BasicModalProps = {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
  title: string;
};

export function BasicModal({
  children,
  showModal,
  onClose,
  title,
}: BasicModalProps) {
  return (
    <Modal open={showModal} onClose={onClose} size="small">
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
