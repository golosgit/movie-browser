import { 
  Container, 
  Image, 
  Info, 
  Description,
  List,
  ListTerm,
  ListDescription,
} from "./styled";
import { Header } from "../Header";
import { OptionalText } from "../OptionalText";

export const Details = () => {
  return (
    <Container>
      <Image />
      <Info>
        <Header details>Liu Yifei</Header>
        <List>
          <ListTerm>Date of birth:</ListTerm>
          <ListDescription>25.08.1987</ListDescription>
          <ListTerm nextItem>Place of birth:</ListTerm>
          <ListDescription nextItem>Wuhan, Hubei, China</ListDescription>
        </List>
      </Info>
      <Description>
        <OptionalText details>
          Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8
          and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu
          lived there for four years.
        </OptionalText>
      </Description>
    </Container>
  );
};