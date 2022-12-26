import { PeopleListContainer, PersonTile, PersonImage } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";

export const PeopleList = ({ title }) => {
  return (
    <>
      <Header>{title}</Header>
      <PeopleListContainer>
        <PersonTile>
          <PersonImage/>
          <Text list>Liu Yifei</Text>
          <OptionalText>Mulan</OptionalText>
        </PersonTile>
      </PeopleListContainer>
    </>
  );
};