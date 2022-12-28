import { Container, StyledIcon, Evaluation } from "./styled";
import { OptionalText } from "../OptionalText";

export const Rating = () => {
  return (
    <Container>
      <StyledIcon />
      <Evaluation>7.8</Evaluation>
      <OptionalText list>35 votes</OptionalText>
    </Container>
  );
};