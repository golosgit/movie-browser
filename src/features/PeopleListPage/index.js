import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper"
import { PeopleList } from "../../common/PeopleList";
import { fetchPeopleList, selectPeopleList } from "./peopleListPageSlice";


export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <MainWrapper>
      <PeopleList
        title="Popular movies"
        peopleList={peopleList}
        listView
      />
    </MainWrapper>
  );
};