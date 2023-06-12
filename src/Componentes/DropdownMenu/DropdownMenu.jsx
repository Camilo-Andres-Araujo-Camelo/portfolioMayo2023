import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowMenu } from '../../store/slices/showMenu.slice.jsx';
import styled from 'styled-components';
import { menuItems } from '../../info.js';

const MenuFixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const MenuWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 65px);
  top: 65px;
`;

const MenuSide = styled.div`
  position: absolute;
  left: 300px;
  width: calc(100vw - 300px);
  height: calc(100vh - 65px);
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const LateralMenu = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0;
  background-color: ${({ theme }) => theme.navBarBgColor};
  width: 300px;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const LateralMenuItems = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  padding: 10px 24px;
  border-bottom: 0.5px solid ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.titlesColor};
    border-color: ${({ theme }) => theme.titlesColor};
  }
`;

const DropdownMenu = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(setShowMenu());
  };

  return (
    <>
      <MenuFixed>
        <MenuWrapper>
          <LateralMenu>
            {menuItems.items.map((item) => {
              return (
                <LateralMenuItems to={`${item.itemName}`} key={item.itemName}>
                  {item.itemName}
                </LateralMenuItems>
              );
            })}
          </LateralMenu>
          <MenuSide onClick={toggleMenu} />
        </MenuWrapper>
      </MenuFixed>
    </>
  );
};

export default DropdownMenu;
