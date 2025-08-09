import { Link } from "react-router";

export const MenuList = () => {
  return (
    <nav>
      <ul style={{ color: '#000', listStyleType: 'none', padding: 0 }}>
        <li><Link to="/orders">Приход</Link></li>
        <li><Link to="/groups">Группы</Link></li>
        <li><Link to="/products">Продукты</Link></li>
        <li><Link to="/users">Пользователи</Link></li>
        <li><Link to="/settings">Настройки</Link></li>
      </ul>
    </nav>
  );
};
