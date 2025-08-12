import styled from '@emotion/styled';

export const SearchBarForm = styled.form`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 6px;
  border-color: #c9bfbf;
`;

export const Input = styled.input`
  font-weight: 600;
  background-color: #f1f3f5;
  border: none;

  height: 18px;
  width: 100%;
  padding: 5px;
  font-size: 20px;
  color: #888;

  &:focus {
    outline: none;
    border: 1px solid #93be56;
  }
`;
