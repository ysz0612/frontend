import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { UserContext } from '../../no0_context/UserContext';
import { userLogoutSlice } from '../../no3_store/slice/userSlice';

function HeaderBar({
  mobileOpen,
  setMobileOpen
}) {
  const {isLogin, user} = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogoutSlice());
    alert("로그아웃 되셨습니다.");
    navigate("/login");
  };

  return (
    <Container>
      <Left>
        <MenuButton
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </MenuButton>

        <Logo>Logo</Logo>
      </Left>

      <Right>
        {isLogin ? (
          <UserBox>
            <UserText>
              안녕하세요! {user.username}
            </UserText>

            <LogoutButton onClick={handleLogout}>
              로그아웃
            </LogoutButton>
          </UserBox>
        ) : (
          <ButtonGroup>
            <AuthButton
              onClick={() => navigate("/login")}
            >
              로그인
            </AuthButton>

            <AuthButton
              primary
              onClick={() => navigate("/register")}
            >
              회원가입
            </AuthButton>
          </ButtonGroup>
        )}
      </Right>
    </Container>
  );
}

export default HeaderBar;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 60px;

  background: #1f1f1f;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  box-sizing: border-box;

  z-index: 1000;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserText = styled.div`
  font-size: 14px;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const BaseButton = styled.button`
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const AuthButton = styled(BaseButton)`
  background: ${(props) =>
    props.primary ? '#4da6ff' : 'white'};

  color: ${(props) =>
    props.primary ? 'white' : '#222'};

  &:hover {
    opacity: 0.85;
  }
`;

const LogoutButton = styled(BaseButton)`
  background: #ef4444;
  color: white;

  &:hover {
    background: #dc2626;
  }
`;

const MenuButton = styled.button`
  display: none;

  background: transparent;
  border: none;

  color: white;
  font-size: 28px;

  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;