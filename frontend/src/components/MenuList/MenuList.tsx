import { Link } from 'react-router';

import { Nav, NavList, NavListItem } from './MenuList.styled';

export const MenuList = () => {
  return (
    <Nav>
      <NavList style={{ color: '#000', listStyleType: 'none', padding: 0 }}>
        <NavListItem>
          <Link to="/orders">Приход</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/groups">Группы</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/products">Продукты</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/users">Пользователи</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/settings">Настройки</Link>
        </NavListItem>
      </NavList>
    </Nav>
  );
};
