import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SiderBar = ({ mobileOpen, setMobileOpen }) => {

  const location = useLocation()

  return (
    <>
      {mobileOpen && (
        <Overlay
          onClick={() => setMobileOpen(false)}
        />
      )}

      <Container mobileOpen={mobileOpen}>

        <Menu>

          <MenuItem
            to="/"
            active={location.pathname === '/'}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </MenuItem>

          <MenuItem
            to="/todo"
            active={location.pathname === '/todo'}
            onClick={() => setMobileOpen(false)}
          >
            할일
          </MenuItem>

          <MenuItem
            to="/employee"
            active={location.pathname === '/employee'}
            onClick={() => setMobileOpen(false)}
          >
            고용인 정보
          </MenuItem>

        </Menu>

      </Container>
    </>
  )
}

export default SiderBar

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.5);

  z-index: 998;

  @media (min-width: 769px) {
    display: none;
  }
`

const Container = styled.aside`
  position: fixed;

  top: 60px;
  left: 0;

  width: 240px;
  height: calc(100vh - 60px);

  background: #2c2c2c;

  padding: 20px;

  transition: 0.3s;

  z-index: 999;

  @media (max-width: 768px) {

    left: ${(props) =>
      props.mobileOpen ? '0' : '-240px'};
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const MenuItem = styled(Link)`
  text-decoration: none;

  color: ${(props) =>
    props.active ? '#4da6ff' : 'white'};

  background: ${(props) =>
    props.active ? 'rgba(77,166,255,0.1)' : 'transparent'};

  padding: 14px 16px;

  border-radius: 10px;

  font-size: 17px;
  font-weight: 500;

  transition: 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`