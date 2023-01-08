import { PeopleListContainer, PersonTile, PersonImage } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";
import { imageUrl, image } from "../../features/api";

export const PeopleList = ({ title, peopleList, listView, credits }) => {
  return (
    <>
      <Header credits={credits}>{title}</Header>
      <PeopleListContainer credits={credits}>
        {peopleList?.map((person) => (
          <PersonTile key={`${person.id}-${person.character || person.job}`}>
            {person?.profile_path ?
              <PersonImage src={`${imageUrl}${image.w400}${person?.profile_path}`}/> :
              <PersonImage />
            }
            <Text list={listView}>
              {person?.name}
            </Text>
            {credits ? 
              <OptionalText person={person}>{person?.character || person?.job}</OptionalText> :
              ""  
            }
          </PersonTile>
        ))}
      </PeopleListContainer>
    </>
  );
};