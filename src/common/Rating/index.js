import { Container, StyledIcon, Evaluation } from "./styled";
import { OptionalText } from "../OptionalText";

export const Rating = ({ details }) => {
  return (
    <Container details={details}>
      <StyledIcon details={details}/>
      <Evaluation details={details}>7.8</Evaluation>
      <OptionalText details={details} max>/ 10</OptionalText>
      <OptionalText details={details} votes>335 votes</OptionalText>
    </Container>
  );
};