import React from 'react'
import styled from 'styled-components'

function HeaderBar({ mobileOpen, setMobileOpen }) {

  return (
    <Container>

      <Left>

        <MenuButton
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </MenuButton>

        <Logo>
          Logo
        </Logo>

      </Left>

      <Right>
        <AuthButton>로그인</AuthButton>
        <AuthButton primary>회원가입</AuthButton>
      </Right>

    </Container>
  )
}

export default HeaderBar

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

  z-index: 1000;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const Right = styled.div`
  display: flex;
  gap: 10px;
`

const AuthButton = styled.button`
  border: none;
  padding: 8px 14px;
  border-radius: 8px;

  cursor: pointer;

  background: ${(props) =>
    props.primary ? '#4da6ff' : 'white'};

  color: ${(props) =>
    props.primary ? 'white' : '#222'};

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`

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
`