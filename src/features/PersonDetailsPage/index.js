import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../common/Details";
import { fetchPersonDetails, selectPersonDetails } from "./personDetailsPageSlice";


export const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const personDetails = useSelector(selectPersonDetails);

  useEffect(() => {
    dispatch(fetchPersonDetails(224513));
  }, [dispatch]);

  return (
    <Details 
      personDetails={personDetails}
      person="true"
    />
  );
};