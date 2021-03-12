import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  bottom: 0;
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2c2c;
  z-index: 100;
  a {
    font-size: 16px;
    padding: 0 1rem;
    color: #c2c2c2;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #f2f2f2;
    }
  }
`;

const Context = {};

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">LOGO</Link>
    </Wrapper>
  );
};

export default Header;
