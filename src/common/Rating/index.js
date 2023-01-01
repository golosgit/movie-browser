import { Container, StyledIcon, Evaluation } from "./styled";
import { OptionalText } from "../OptionalText";

export const Rating = ({ average, hideMaxVotes, totalVotes, listView }) => {
  return (
    <Container
    list={listView ? 1 : 0}>
      <StyledIcon/>
      <Evaluation>{average.toFixed(1)}</Evaluation>
      <OptionalText 
        list={listView ? 1 : 0}
        hidden={hideMaxVotes}>
          / 10
      </OptionalText>
      <OptionalText 
        list={listView ? 1 : 0}>
          {totalVotes} votes
      </OptionalText>
    </Container>
  );
};