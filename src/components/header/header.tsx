import logo from '../../assets/logo.svg';
import Button from '../../atoms/Button/Button'
import './header.scss';
import './header-mb.scss';

const Header = () =>
  <header className="App-header">
    <img src={logo} className="netflix-logo" onClick={() => window.location.reload()} alt="logo" />
    <Button>Sign In</Button>
  </header>

export default Header;