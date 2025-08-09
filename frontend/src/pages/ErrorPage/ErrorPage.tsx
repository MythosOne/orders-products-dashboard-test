import { Container, Title, Message } from '@/pages/ErrorPage/ErrorPage.styled';

export const ErrorPage = () => {
  return (
    <Container>
      <Title>Error 404</Title>
      <Message>Page not found.</Message>
    </Container>
  );
}