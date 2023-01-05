import { Container, StyledIcon, Evaluation } from "./styled";
import { OptionalText } from "../OptionalText";

export const Rating = ({ average, hideMaxVotes, totalVotes, listView, details }) => {
  return (
    <Container
      list={listView}
      details={details}
    >
      <StyledIcon details={details}/>
      <Evaluation details={details}>{average?.toFixed(1)}</Evaluation>
      <OptionalText 
        list={listView}
        hiddenMax={hideMaxVotes}
        details={details}
      >
        / 10
      </OptionalText>
      <OptionalText 
        list={listView}
        details={details}
      >
        {totalVotes} votes
      </OptionalText>
    </Container>
  );
};