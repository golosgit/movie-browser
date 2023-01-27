import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../../common/Navigation"; 
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper"
import { PeopleList } from "../../common/PeopleList";
import { Pagination } from "../../common/Paginaion";
import { fetchPeopleList, selectPage, selectPeopleList, selectStatus, selectTotalPages } from "./peopleListPageSlice";

export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <>
    <Navigation />
      <Content status={status}>
        <MainWrapper>
          <PeopleList
            title="Popular movies"
            peopleList={peopleList}
            listView="true"
          />
          <Pagination 
            page={page}
            totalPages={totalPages}
          />
        </MainWrapper>
      </Content>
    </>
  );
};