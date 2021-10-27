import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useInject, useInjectRoot } from './index';

const Ground1: FC = observer(() => {
  return (
    <div>
      <ButtonCounter />
      <CountPanel />
      <Text />
      <Auth />
    </div>
  );
});

const ButtonCounter = observer(() => {
  const { counterStore } = useInject();
  console.log('ButtonCounter render');
  return (
    <button
      onClick={() => {
        counterStore.increase();
      }}
    >
      increase
    </button>
  );
});

const CountPanel = observer(() => {
  const { counterStore } = useInject();
  console.log('CountPanel render');
  return <div>{counterStore.count}</div>;
});

const Text = observer(() => {
  const { textStore } = useInject();
  const { userStore } = useInjectRoot();
  console.log('Text render');
  return (
    <div style={{ backgroundColor: '#0f0' }}>
      <span>{textStore.text}</span>
      <span>{userStore.isLogin ? 'login' : 'logout'}</span>
      <input
        type="text"
        onChange={({ target: { value } }) => {
          textStore.setText(value);
        }}
      />
    </div>
  );
});

const Auth = observer(() => {
  const { userStore } = useInjectRoot();

  return (
    <div>
      <span>{userStore.isLogin ? 'login' : 'logout'}</span>
      <button type="button" onClick={() => userStore.login()}>
        Login
      </button>
      <button type="button" onClick={() => userStore.logout()}>
        Logout
      </button>
    </div>
  );
});

export default Ground1;
