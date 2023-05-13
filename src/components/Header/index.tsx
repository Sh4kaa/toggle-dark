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
        onColor="#37f507"
        checked={name === 'Light'}
      />
      <button onClick={handleTheme}>Trocar</button>
    </>
  );
};

export default Home;
