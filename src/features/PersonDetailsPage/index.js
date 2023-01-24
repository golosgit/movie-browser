import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

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