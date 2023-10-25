import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { BasicModal } from '../../../Shared';
import { AddressForm } from '../AddressForm';
import styles from './AddAddress.module.scss';

export type AddAddressProps = {
  onRealod: () => void;
};

export function AddAddress({ onRealod }: AddAddressProps) {
  const [showModal, setShowModal] = useState(false);

  const openClose = () => setShowModal((prev) => !prev);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={openClose}>
        Criar
      </Button>

      <BasicModal
        showModal={showModal}
        onClose={openClose}
        title="Novo endereço"
      >
        <AddressForm onClose={openClose} onRealod={onRealod} />
      </BasicModal>
    </>
  );
}
