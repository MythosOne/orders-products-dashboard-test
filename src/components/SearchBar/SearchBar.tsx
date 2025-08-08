import {
  SearchBarForm,
  Container,
  ButtonSearch,
  Input,
} from '@/components/SearchBar/SearchBar.styled';

export const SearchBar = () => {
  return (
    <>
      <Container>
        <SearchBarForm>
          <ButtonSearch
            type="submit"
            aria-label="search"
            title="Search"
          ></ButtonSearch>
          <Input
            name="inputData"
            //   value={value}
            //   onChange={handleChange}
            type="text"
            autoFocus
            autoComplete="on"
            placeholder="Поиск"
          />
        </SearchBarForm>
      </Container>
    </>
  );
};
