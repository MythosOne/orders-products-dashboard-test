import styled from '@emotion/styled';

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #000;
  padding: 0;
`;

export const NavListItem = styled.li`
  position: relative;
  font-size: 22px;
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
  transition:
    color 0.3s,
    font-size 0.3s;
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  display: block;
  text-align: left;

  &:hover {
    font-weight: 600;
    color: #93be56;
    transition: font-size 0.5s;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #93be56;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;
