import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Paginaion";
import { PeopleList } from "../../common/PeopleList";
import { pageParamName, searchParamName } from "../../core/urlParams";
import { baseUrl, apiKey, popularPeople, searchPeople } from "../api";
import { createUrl } from "../createUrl";
import { fetchData } from "../fetchData";

export const PeopleListPage = () => {
  const [params] = useSearchParams();
  const [queryStatus, setQueryStatus] = useState("initial");

  const pageNumber = params.get(pageParamName) || 1;
  const searchParam = params.get(searchParamName) || "";

  const { status, data } = useQuery(
    ["peopleList", { page: pageNumber, searchQuery: searchParam }], 
    searchParam ? 
      () => fetchData(createUrl(baseUrl, searchPeople, apiKey, "&page=", pageNumber, "&query=", searchParam)) :
      () => fetchData(createUrl(baseUrl, popularPeople, apiKey, "&page=", pageNumber)),
  );

  useEffect(() => {
    if (pageNumber > data?.total_pages) {
      setQueryStatus("error");
    } else {
      setQueryStatus(status);
    }
  }, [status, pageNumber, data?.total_pages]);

  return (
    <>
      <Navigation />
      <Content 
        status={queryStatus} 
        message={searchParam}
      >
        <MainWrapper>
          <PeopleList
            title={searchParam ? `Search results for "${searchParam}" (${data?.total_results})` : "Popular movies"}
            peopleList={data?.results}
            listView="true"
          />
          <Pagination 
            page={data?.page} 
            totalPages={data?.total_pages} 
          />
        </MainWrapper>
      </Content>
    </>
  );
};
