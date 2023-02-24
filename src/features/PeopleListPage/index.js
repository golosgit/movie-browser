import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Paginaion";
import { PeopleList } from "../../common/PeopleList";
import { pageParamName, searchParamName } from "../../core/urlParams";
import { fetchError, fetchPeopleList, selectPage, selectPeopleList, selectStatus, selectTotalPages, selectTotalResults } from "./peopleListPageSlice";

export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const [params] = useSearchParams();

  const pageNumber = params.get(pageParamName) || 1;
  const searchParam = params.get(searchParamName) || "";

  if (pageNumber > totalPages) {
    dispatch(fetchError());
  }

  useEffect(() => {
    if (status !== "loading") {
      dispatch(fetchPeopleList({ pageNumber, searchParam }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, pageNumber, searchParam]);

  return (
    <>
      <Navigation />
      <Content status={status} message={searchParam}>
        <MainWrapper>
          <PeopleList
            title={searchParam ? `Search results for "${searchParam}" (${totalResults})` : "Popular movies"}
            peopleList={peopleList}
            listView="true"
          />
          <Pagination page={page} totalPages={totalPages} />
        </MainWrapper>
      </Content>
    </>
  );
};
