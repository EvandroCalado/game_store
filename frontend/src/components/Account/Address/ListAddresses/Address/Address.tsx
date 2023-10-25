import { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Address as AddressCtrl } from '../../../../../api/address';
import { TypeAddress } from '../../../../../types';
import { BasicModal, Confirm } from '../../../../Shared';
import { AddressForm } from '../../AddressForm';
import styles from './Address.module.scss';

export type AddressProps = {
  addressId: number;
  address: TypeAddress;
  onRealod: () => void;
};

const addressCtrl = new AddressCtrl();

export function Address({ addressId, address, onRealod }: AddressProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prev) => !prev);
  const openCloseConfirm = () => setShowConfirm((prev) => !prev);

  const OnDelete = async () => {
    try {
      await addressCtrl.delete(addressId);
      onRealod();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.attributes.title}:</p>
          <p className={styles.info}>
            {address.attributes.name}, {address.attributes.address},
            {address.attributes.state}, {address.attributes.city},
            {address.attributes.postalCode}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="edit outline" />
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="trash alternate outline" />
          </Button>

          <BasicModal
            showModal={showEdit}
            onClose={openCloseEdit}
            title="Editar endereço"
          >
            <AddressForm
              onClose={openCloseEdit}
              onRealod={onRealod}
              addressId={addressId}
              address={address}
            />
          </BasicModal>

          <Confirm
            open={showConfirm}
            onCancel={openCloseConfirm}
            onConfirm={OnDelete}
            content="Tem certeza que deseja excluir?"
          />
        </div>
      </div>
    </>
  );
}
