import { PeopleListContainer, PersonTile, PersonImage } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";
import { imageUrl, image } from "../../features/api";

export const PeopleList = ({ title, peopleList, listView, hideJob }) => {
  return (
    <>
      <Header>{title}</Header>
      <PeopleListContainer>
        {peopleList?.map((person) => (
          <PersonTile key={person.id}>
            {person?.profile_path ?
              <PersonImage src={`${imageUrl}${image.peopleList}${person?.profile_path}`}/> :
              <PersonImage />
            }
            <Text 
              list={listView ? 1 : 0}
            >
                {person?.name}
            </Text>
            <OptionalText person={person} hidden={hideJob}>Mulan</OptionalText>
          </PersonTile>
        ))}
      </PeopleListContainer>
    </>
  );
};