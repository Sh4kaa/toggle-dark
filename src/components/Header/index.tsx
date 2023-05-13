import { useContext } from 'react';
import { Head } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

type Props = {
  handleTheme: () => void;
};

const Home = ({ handleTheme }: Props) => {
  const { name } = useContext(ThemeContext);
  return (
    <>
      <Head>Home</Head>
      <Switch
        onChange={handleTheme}
        offColor="#484e48"
        onColor="#000"
        checked={name === 'Light'}
        height={20}
        width={40}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      {name === 'Light' ? <p>Light</p> : <p>Dark</p>}
    </>
  );
};

export default Home;
