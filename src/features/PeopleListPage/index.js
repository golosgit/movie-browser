import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeopleList } from "../../common/PeopleList";
import { fetchPeopleList, selectPeopleList } from "./peopleListPageSlice";


export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <PeopleList
      title="Popular movies"
      peopleList={peopleList}
      listView
    />
  );
};