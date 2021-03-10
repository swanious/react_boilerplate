import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    padding: 0 1rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">LOGO</Link>
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
