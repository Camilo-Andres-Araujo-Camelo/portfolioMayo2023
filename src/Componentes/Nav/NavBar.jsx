import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMenu } from '../../store/slices/ShowMenu.slice.jsx';
import { menuItems } from '../../info.js';
import logo from '../../assets/images/logoWhite.png';
import { BsSun, BsMoon } from 'react-icons/bs';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useState } from 'react';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBarBgColor};
  width: 100%;
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  color: ${({ theme }) => theme.textColor};
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 1199px) {
    padding: 0 15px;
  }
`;

const NavItem = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  padding: 10px;
  margin: 10px;
  white-space: nowrap;
  position: relative;
  transition: 0.5s;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid ${({ theme }) => theme.titlesColor};
    border-bottom: 2px solid ${({ theme }) => theme.titlesColor};
    transform: scaleY(2);
    opacity: 0;
    transition: 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.titlesColor};
    transform: scale(0);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }
  &:hover {
    color: black;
    &:before {
      transform: scaleY(1);
      opacity: 1;
    }
    &:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 110px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;

  *:hover {
    cursor: pointer;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1199px) {
    display: none;
  }
`;

const NavBar = () => {
  const [mode, setMode] = useState(true);
  const toggleMode = () => {
    setMode(!mode);
  };

  const dispatch = useDispatch();

  const showMenu = useSelector((state) => state.showMenu);
  const toggleMenu = () => {
    dispatch(setShowMenu());
  };
  return (
    <Nav>
      <Link to="/Home">
        <Logo src={logo} alt="Logo" />
      </Link>
      <ItemsContainer>
        {menuItems.items.map((item, i) => {
          return (
            <NavItem to={`${item.itemName}`} key={i}>
              {item.itemName}
            </NavItem>
          );
        })}
      </ItemsContainer>
      <IconsContainer>
        {mode ? (
          <BsSun
            onClick={toggleMode}
            style={{ width: '24px', height: '24px' }}
          />
        ) : (
          <BsMoon onClick={toggleMode} />
        )}
        <MenuIconContainer>
          {showMenu ? (
            <AiOutlineMenuFold
              style={{ width: '24px', height: '24px' }}
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineMenuUnfold
              style={{ width: '24px', height: '24px' }}
              onClick={toggleMenu}
            />
          )}
        </MenuIconContainer>
      </IconsContainer>
    </Nav>
  );
};

export default NavBar;
