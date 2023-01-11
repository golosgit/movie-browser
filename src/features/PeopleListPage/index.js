import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper"
import { PeopleList } from "../../common/PeopleList";
import { fetchPeopleList, selectPeopleList, selectStatus } from "./peopleListPageSlice";

export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <Content status={status}>
      <MainWrapper>
        <PeopleList
          title="Popular movies"
          peopleList={peopleList}
          listView="true"
        />
      </MainWrapper>
    </Content>
  );
};