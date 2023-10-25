import { map } from 'lodash';
import { useEffect, useState } from 'react';
import { Address } from '.';
import { Address as AdressApi } from '../../../../api';
import { useAuth } from '../../../../hooks';
import { TypeAddresses } from '../../../../types';
import styles from './ListAddresses.module.scss';

export type AddressProps = {
  realod: boolean;
  onRealod: () => void;
};

const addressCtrl = new AdressApi();

export function ListAddresses({ realod, onRealod }: AddressProps) {
  const [addresses, setAddresses] = useState<TypeAddresses | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);

        setAddresses(response);
        onRealod();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.id, realod, onRealod]);

  if (!addresses) return null;

  return (
    <div className={styles.addresses}>
      {map(addresses.data, (address) => (
        <Address
          address={address}
          key={address.id}
          addressId={address.id}
          onRealod={onRealod}
        />
      ))}
    </div>
  );
}
