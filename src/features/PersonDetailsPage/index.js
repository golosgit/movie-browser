import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { Details } from "../../common/Details";
import { MovieList } from "../../common/MovieList";
import { fetchPersonDetails, selectPersonDetails, selectCast, selectCrew, selectStatus } from "./personDetailsPageSlice";


export const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectPersonDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPersonDetails(224513));
  }, [dispatch]);

  return (
    <Content status={status}>
      <MainWrapper>
        <Details 
          personDetails={personDetails}
          person="true"
        />
        <MovieList 
          title={`Movies - cast${` (${cast?.length})` || ``}`}
          movieList={cast}
          credits="true"
          listView="true"
        />
        <MovieList 
          title={`Movies - crew${` (${crew?.length})` || ``}`}
          movieList={crew}
          credits="true"
          listView="true"
        />
      </MainWrapper>
    </Content>
  );
};