import { OptionalText } from "../OptionalText";
import { Container, StyledIcon, Evaluation } from "./styled";

export const Rating = ({ average, hideMaxVotes, totalVotes, listView, details, backdrop, votes, secondLine, hidden }) => {
  return (
    <>
      <Container list={listView} details={details} backdrop={backdrop} secondLine={secondLine}>
        <StyledIcon details={details} backdrop={backdrop} hidden={secondLine} />
        <Evaluation details={details} backdrop={backdrop}>
          {average?.toFixed(1).replace(".", ",")}
        </Evaluation>
        <OptionalText list={listView} hiddenMax={hideMaxVotes} details={details} backdrop={backdrop} secondLine={secondLine}>
          / 10
        </OptionalText>
        <OptionalText list={listView} details={details} backdrop={backdrop} votes={votes} hidden={hidden}>
          {totalVotes} votes
        </OptionalText>
      </Container>
    </>
  );
};
