import { Container, Poster } from "./styled";

export const Backdrop = image => {
  console.log(image.image);

  return (
    <Container>
      <Poster image={image.image} />
    </Container>
  );
};