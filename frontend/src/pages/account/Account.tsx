import { useRouter } from 'next/router';
import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { Address, Info, Settings } from '../../components/Account';
import { Separator } from '../../components/Shared';
import { useAuth } from '../../hooks';
import { BasicLayout } from '../../layouts';
import styles from './Account.module.scss';

export default function Account() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [realod, setReload] = useState(false);

  if (!user) {
    router.push('/');
    return null;
  }

  const onRealod = () => setReload((prev) => !prev);

  const panes = [
    {
      menuItem: 'Meus pedidos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Meu pedidos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Lista de desejos',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Lista de desejos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Endereços',
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onRealod={onRealod} />
          <Address.ListAddresses realod={realod} onRealod={onRealod} />
          <Separator height={40} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Ajustes',
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          {/* <Separator height={5} /> */}
          <div className={styles.containerForm}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={30} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: 'log out',
        content: '',
        onClick: logout,
      },
    },
  ];

  return (
    <>
      <BasicLayout isContaner relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        ></Tab>
      </BasicLayout>
    </>
  );
}
