import { 
  Container, 
  Image, 
  Info, 
  Description,
  Year, 
  List, 
  ListRow, 
  ListTerm, 
  ListDescription,
} from "./styled";
import { Header } from "../Header";
import { Genres } from "../Genres";
import { Rating } from "../Rating";
import { OptionalText } from "../OptionalText";

export const Details = () => {
  return (
    <Container>
      <Image movie/>
      <Info>
        <Header details>Mulan</Header>
        <Year>2020</Year>
        <List movie>
          <ListRow>
            <ListTerm movie>Production: </ListTerm>
            <ListDescription>China, United States of America</ListDescription>
          </ListRow>
          <ListRow nextItem>
            <ListTerm movie>Release date: </ListTerm>
            <ListDescription>24.10.2020</ListDescription>
          </ListRow>
        </List>
        <Genres details/>
        <Rating details/>
      </Info>
      <Description>
        <OptionalText description>
          A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a
          male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order
          to save her father.
        </OptionalText>
      </Description>
    </Container>
  );
};